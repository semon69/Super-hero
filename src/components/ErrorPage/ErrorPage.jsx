import React from 'react';
import { Navigate, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const handleGoBack =() => {
        navigate('/')
    }
    return (
        <div>
            <div className=' justify-center items-center'>
                <div className='text-center my-5'>
                    <h1 className='text-7xl font-bold text-gray-500 mb-10'>Opssss!</h1>
                    <p className='text-orange-600 text-3xl my-5'>{error?.message}</p>
                    <img className='w-9/12 mx-auto my-16 h-[500px]' src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_640.png" alt="" />

                </div>
                <div className='text-center m-10'>
                    <button onClick={handleGoBack} className='btn btn-black'>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;