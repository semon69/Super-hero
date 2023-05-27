import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData()
    console.log(toy)
    const { availableQuantity, description, email, photo, price, ratting, seller, subCategory, toyName, _id } = toy[0];
    console.log(photo, price)
    return (
        <div className='my-10'>
            <h1 className='text-4xl text-blue-700 font-bold mb-10'>Details of: <span className='text-black'>{toyName}</span></h1>
            <div className="card lg:card-side bg-gray-200 shadow-xl py-5">
                <figure><img src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <div className='flex gap-5 justify-center items-center '>
                        <div className='space-y-3 -mt-36'>
                            <h1 className='text-2xl font-bold underline'>Seller Info</h1>
                            <p className='font-bold'>Name: {seller}</p>
                            <p className='font-bold'>Email: {email}</p>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-2xl font-bold underline'>Toy Info</h1>
                            <p className='font-bold'>Toy Name: {toyName}</p>
                            <p className='font-bold'>Sub-Category: {subCategory}</p>
                            <p className='font-bold'>Price: {price}</p>
                            <p className='font-bold'>Quantity: {availableQuantity}</p>
                            <p className='font-bold'>Ratting: {ratting}</p>
                            <p className='font-bold'>Description: {description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;