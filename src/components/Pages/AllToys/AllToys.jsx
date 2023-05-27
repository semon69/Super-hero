import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from '../SingleToy/SingleToy';
import useTitle from '../../../hooks/useTitle';

const AllToys = () => {
    const loaderAllToys = useLoaderData()

    useTitle('All Toys')
    const [allToys, setAllToys] = useState(loaderAllToys)

    const handleSearch = event => {
        event.preventDefault()
        const search = event.target.search.value;
        console.log(search)
        fetch(`https://super-heros-server.vercel.app/toySearch/${search}`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }

    const reValidate = async (event) => {
        if (event.target.value == '') {
            setAllToys(loaderAllToys)
        }
    }

    return (
        <div className='mb-10'>
            <div className='my-10 text-center'>
                <form onSubmit={handleSearch}>
                    <input onChange={reValidate} type="text" placeholder="Type here" name='search' className="input input-bordered w-full max-w-xs mr-8" />
                    <button className='btn btn-black text-white'>Search</button>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className=''>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='bg-gray-200 text-black'>
                        {
                            allToys.map((toys, index) => <SingleToy key={toys._id} toys={toys} index={index}></SingleToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;