import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2'
import useTitle from '../../../hooks/useTitle';


const AddAToy = () => {
    const { user } = useContext(AuthContext)
    useTitle('Add A Toy')
    const handleAdd = event => {
        event.preventDefault()
        const form = event.target;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const seller = user?.displayName;
        const email = user?.email;
        const subCategory = form.subCategory.value;
        const price = parseInt(form.price.value);
        const ratting = form.rating.value;
        const availableQuantity = form.quantity.value;
        const description = form.description.value;
        const toyInfo = {
            photo, toyName, seller, email, subCategory, price, ratting, availableQuantity, description
        }
        console.log(toyInfo)
        fetch('https://super-heros-server.vercel.app/allToys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire('A Toy added Successfully')
                    form.reset()
                }
            })
    }
    return (
        <div className=''>
            <div className="hero min-h-screen bg-gray-200 text-black">
                <div className="w-full">

                    <div className="w-full p-5">
                        <form onSubmit={handleAdd} className=" text-black">
                            <div className='flex gap-3'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Toy Photo</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" placeholder="Toy Name" name='toyName' className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" placeholder="Seller Name" name='seller' defaultValue={user?.displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Sub Category</span>
                                    </label>
                                    <input type="text" placeholder="Sub Category" name='subCategory' className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="Price" name='price' className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" placeholder="Rating" name='rating' className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="number" placeholder="Quantity" name='quantity' className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea placeholder='description' name="description" className="input input-bordered h-32"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-black text-white">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;