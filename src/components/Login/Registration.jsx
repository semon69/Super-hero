import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2'
import { FaGoogle, } from 'react-icons/fa';
import Lottie from "lottie-react";
import lotiie1 from "./lottieRegistration.json"

const Registration = () => {
    const { signUp, updateUser, logOut, googleSignIn } = useContext(AuthContext)
    useTitle('Registration')
    const [error, setError] = useState('')


    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const info = { name, photo, email, password }
        console.log(info)
        signUp(email, password)
            .then(result => {
                Swal.fire('Registration Success')
                console.log(result.user)
                form.reset()
                updateUser(name, photo)
                    .then(() => { })
                    .catch(err => {
                        setError(err)
                        Swal.fire(`${error}`)
                        form.reset()
                    })
                logOut()
                    .then(() => { })
                    .then(error => console.log(error))
            })
            .catch(error => {
                setError(error)
                Swal.fire(`${error}`)

            })
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                Swal.fire('Login Success')
                console.log(result.user)
                logOut()
                    .then(() => { })
                    .then(error => console.log(error))
            })
            .catch(error => {
                Swal.fire(`${error}`)
            })
    }
    return (
        <div>
            <div className="max-w-7xl mx-auto my-10">
                <div className="md:flex gap-10 items-center">
                    <div className='md:w-1/2 w-full'>
                        <Lottie animationData={lotiie1}></Lottie>
                    </div>
                    <div className="card md:w-1/2 w-full shadow-2xl bg-orange-50">
                        <form onSubmit={handleRegistration} className="card-body font-bold">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="photo url" name='photo' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-orange-500 px-3 py-2 rounded hover:bg-black text-white">Register</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className='text-center'>
                            <button onClick={handleGoogleLogin} className='bg-orange-500 px-3 py-2 rounded hover:bg-black text-white'> <FaGoogle></FaGoogle> </button>
                        </div>
                        <label className="my-3">
                            <p className=" text-center">Already Have an Account? <Link className='link link-hover' to='/login'>Login</Link></p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;