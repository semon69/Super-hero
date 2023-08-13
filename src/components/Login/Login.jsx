import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2'
import { FaGoogle, } from 'react-icons/fa';
import Lottie from "lottie-react";
import lotiie1 from "./lottieJson.json"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('')
    console.log(from, location)
    useTitle('Login')

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
                Swal.fire('Login Success')
                form.reset()

            })
            .catch(error => {
                setError(error)
                Swal.fire(`${error}`)

            })
    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error)
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
                        <form onSubmit={handleLogin} className="card-body font-bold">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-orange-500 px-3 py-2 rounded hover:bg-black text-white">Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className='text-center'>
                            <button onClick={handleGoogleLogin} className='bg-orange-500 px-3 py-2 rounded hover:bg-black text-white'> <FaGoogle></FaGoogle> </button>
                        </div>
                        <label className="my-3">
                            <p className="-text-alt text-center">Don't Have an Account? <Link className='link link-hover' to='/registration'>Registration</Link></p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;