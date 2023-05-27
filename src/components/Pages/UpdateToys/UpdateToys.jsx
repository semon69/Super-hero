import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import useTitle from '../../../hooks/useTitle';

const UpdateToys = () => {
    const toys = useLoaderData()
    console.log(toys)
    useTitle('Update A Toy')
    const { availableQuantity, Photo, price, subCategory, toyName, _id, seller, description } = toys[0]
    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const price = parseInt(form.price.value);
        const availableQuantity = form.quantity.value;
        const description = form.description.value;
        const updateInfo = {
              price, availableQuantity, description
        }
        fetch(`https://super-heros-server.vercel.app/myToys/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire('A Toy updated Successfully')
                }
            })
    }
    return (
        <div className='mb-10'>
            <h1 className='text-4xl font-bold my-10 text-center text-white'>Update Information of: {toyName} Toy</h1>
            <div className="hero min-h-screen bg-gray-200">
                <div className="w-full">
                    <div className="w-full p-5">
                        <form onSubmit={handleUpdate} className=" text-whit">
                            <div className='flex gap-3'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name='price' defaultValue={price} className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="number" placeholder="Quantity" name='quantity' defaultValue={availableQuantity} className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea placeholder='description' defaultValue={description} name="description" className="input input-bordered h-32"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-black text-white">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToys;