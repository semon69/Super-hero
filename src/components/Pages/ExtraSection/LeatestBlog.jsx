import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LeatestBlog = () => {
    const [toys, setToys] = useState([])
    console.log(toys)
    useEffect(() => {
        fetch('https://super-heros-server.vercel.app/latestToys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])
    return (
        <div className='bg-gray-200 py-5 px-2 mx-2'>
            <h1 className='text-start text-3xl text-gray-900 font-bold ms-4 hover:bg-black hover:text-white w-1/2 p-2'>Latest Toy</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4  lg:py-9'>
                {
                    toys.map(toy =>
                        <div>
                            <div data-aos="zoom-in"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" key={toy._id} className="bg-blue-900 hover:bg-blue-500 text-white h-[500px] shadow-xl rounded">
                                <figure><img className='rounded w-full' src={toy.photo} alt="Toys" /></figure>
                                <div className="p-3">
                                    <h2 className="flex justify-center items-center gap-2 p-4">
                                        <h1 className='text-2xl font-bold'>{toy.toyName}</h1>
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{toy.description}</p>
                                    <div className='mt-10'>
                                        <button className='btn btn-black text-white'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default LeatestBlog;