import React, { useState } from 'react';
import '../ExtraSection/TopTrending.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopTrending = () => {

    return (
        <div className='bg-gray-200 my-10 py-3 px-4 max-w-7xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-start text-3xl text-gray-900 font-bold mt-3 ms-4 w-72 p-2 hover:bg-black hover:text-white'>Top Trending Toy</h1>

                <p className='text-4xl text-blue-800 font-bold'>Collect Your toys with  discount</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div  data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8'>
                    <div title='Hurry Up!' className='bgImage relative'>
                        <p className='border bg-orange-400 text-white w-28 absolute top-10 left-3 hover:bg-green-600'>5% discount</p>
                    </div>
                    <div>
                        <p className='text-3xl font-bold text-orange-500 my-3'>$50.00</p>
                    </div>
                    <button className='btn btn-black text-white ms-48 my-5'>Buy Now</button>
                </div>
                <div  data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8'>
                    <div  title='Next Time!' className='bgImage1 relative'>
                        <p className='border bg-gray-400 text-white w-28 absolute top-10 left-3 hover:bg-red-700'>Stock Out</p>
                    </div>
                    <div>
                        <p className='text-3xl font-bold text-orange-500 my-3'>$60.00</p>
                    </div>
                    <button className='btn btn-black text-white ms-48 my-5'>Buy Now</button>
                </div>
                <div  data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8'>
                    <div  title='Hurry Up!' className='bgImage2 relative'>
                        <p className='border bg-orange-400 text-white w-28 absolute top-10 left-3  hover:bg-green-600'>20% discount</p>
                    </div>
                    <div>
                        <p className='text-3xl font-bold text-orange-500 my-3'>$30.00</p>
                    </div>
                    <button className='btn btn-black text-white ms-48 my-5'>Buy Now</button>
                </div>
                <div  data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8'>
                    <div  title='Next Time!' className='bgImage3 relative'>
                        <p className='border bg-gray-400 text-white w-28 absolute top-10 left-3 hover:bg-red-700'>Stock Out</p>
                    </div>
                    <div>
                        <p className='text-3xl font-bold text-orange-500 my-3'>$45.00</p>
                    </div>
                    <button className='btn btn-black text-white ms-48 my-5'>Buy Now</button>
                </div>
                <div data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8'>
                    <div  title='Hurry Up!' className='bgImage4 relative'>
                        <p className='border bg-orange-400 text-white w-28 absolute top-10 left-3  hover:bg-green-600'>10% discount</p>
                    </div>
                    <div>
                        <p className='text-3xl font-bold text-orange-500 my-3'>$50.00</p>
                    </div>
                    <button className='btn btn-black text-white ms-48 my-5'>Buy Now</button>
                </div>
                <div data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8'>
                    <div title='Hurry Up!' className='bgImage5 relative'>
                        <p className='border bg-orange-400 text-white w-28 absolute top-10 left-3  hover:bg-green-600'>14% discount</p>
                    </div>
                    <div>
                        <p className='text-3xl font-bold text-orange-500 my-3'>$55.00</p>
                    </div>
                    <button className='btn btn-black text-white ms-48 my-5'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TopTrending;