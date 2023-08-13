import React, { useState } from 'react';
import '../ExtraSection/TopTrending.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopTrending = () => {

    return (
        <div className=' max-w-7xl mx-auto my-10'>
            <h1 className='text-5xl font-bold border-l-8 border-orange-500 text-white px-2 mb-8'>Top Trending Toy</h1>
            <div className=' my-8 py-3 px-4'>
                {/* <div className='text-center'>
                    <p className='text-4xl text-orange-500 font-bold'>Collect Your toys with  discount</p>
                </div> */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8 bg-white'>
                        <div title='Hurry Up!' className='bgImage relative'>
                            <p className='border bg-orange-400 text-white px-3 py-2 w-36 rounded absolute top-10 left-3 hover:bg-green-600'>5% discount</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl font-bold my-3'>$50.00</p>
                            <button className='bg-orange-500 px-3 py-2 rounded text-white font-bold'>Buy Now</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8 bg-white'>
                        <div title='Next Time!' className='bgImage1 relative'>
                            <p className='border bg-gray-400 text-white px-3 py-2 w-36 rounded absolute top-10 left-3 hover:bg-red-700'>Stock Out</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl font-bold text-orange-500 my-3'>$60.00</p>
                            <button className='bg-orange-500 px-3 py-2 rounded text-white font-bold'>Buy Now</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8 bg-white'>
                        <div title='Hurry Up!' className='bgImage2 relative'>
                            <p className='border bg-orange-400 text-white px-3 py-2 w-36 rounded absolute top-10 left-3  hover:bg-green-600'>20% discount</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl font-bold my-3'>$30.00</p>
                            <button className='bg-orange-500 px-3 py-2 rounded text-white font-bold'>Buy Now</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8 bg-white'>
                        <div title='Next Time!' className='bgImage3 relative'>
                            <p className='border bg-gray-400 text-white px-3 py-2 w-36 rounded absolute top-10 left-3 hover:bg-red-700'>Stock Out</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl font-bold my-3'>$45.00</p>
                            <button className='bg-orange-500 px-3 py-2 rounded text-white font-bold'>Buy Now</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8 bg-white'>
                        <div title='Hurry Up!' className='bgImage4 relative'>
                            <p className='border bg-orange-400 text-white px-3 py-2 w-36 rounded absolute top-10 left-3  hover:bg-green-600'>10% discount</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl font-bold my-3'>$50.00</p>
                            <button className='bg-orange-500 px-3 py-2 rounded text-white font-bold'>Buy Now</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='border border-black p-4 rounded shadow-xl my-8 bg-white'>
                        <div title='Hurry Up!' className='bgImage5 relative'>
                            <p className='border bg-orange-400 text-white px-3 py-2 w-36 rounded absolute top-10 left-3  hover:bg-green-600'>14% discount</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl font-bold my-3'>$55.00</p>
                            <button className='bg-orange-500 px-3 py-2 rounded text-white font-bold'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopTrending;