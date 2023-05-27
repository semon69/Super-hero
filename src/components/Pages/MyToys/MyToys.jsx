import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import useTitle from '../../../hooks/useTitle';
const MyToys = () => {
    const { user } = useContext(AuthContext)
    useTitle('My Toys')
    const [myToys, setMyToys] = useState([])
    const [sort, setSort] = useState('asc')

    useEffect(() => {
        fetch(`https://super-heros-server.vercel.app/myToys?email=${user?.email}&sort=${sort}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [sort])

    const handleOnChange= (event) => {
        setSort(event.target.value)
    }

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://super-heros-server.vercel.app/myToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id != id)
                            setMyToys(remaining)
                        }

                    })
            }
        })
        console.log(id)

    }
    return (
        <div>
            <div>
                <select className='border border-black bg-blue-700 text-white p-2 text-center' id="sort-select" onChange={handleOnChange}>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
                <div className="overflow-x-auto w-full my-8">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='text-black'>
                            <tr>
                                <th>Toy Category</th>
                                <th>Seller Info</th>
                                <th>Toy Info</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-black'>
                            {/* row 1 */}
                            {
                                myToys.map(toy =>
                                    <tr key={toy._id}>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={toy.photo} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{toy.toyName}</div>
                                                    <div className="text-sm opacity-50">{toy.subCategory}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>Name: {toy.seller}</p>
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Email: {toy.email}</span>
                                        </td>
                                        <td>
                                            <p>Price: ${toy.price}</p>
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Quantity: {toy.availableQuantity}</span>
                                        </td>
                                        <td>{toy.description}</td>
                                        <th>
                                            <button className="btn btn-black text-white mr-2"><Link to={`/myToys/${toy._id}`}>Update</Link></button>
                                            <button onClick={() => handleDelete(toy._id)} className="btn btn-black text-white">Delete</button>
                                        </th>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;