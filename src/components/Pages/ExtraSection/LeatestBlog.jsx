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
    console.log(toys);
    return (
        <div className=' max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold border-l-8 border-orange-500 text-white px-2 mb-8'>Latest Toy</h1>
            <div className='py-5 px-2'>
                {/* <h1 className='text-4xl font-bold text-orange-500 my-5 text-center'>Latest Industry Top</h1> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  lg:py-9'>
                    {
                        toys.map(toy =>
                            <div className=''>
                                <div data-aos="zoom-in"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000" key={toy._id} className="md:flex gap-4 shadow-2xl rounded bg-white">
                                    <figure className='md:w-1/2 w-full'><img className='rounded w-full h-[220px]' src={toy.photo} alt="Toys" /></figure>
                                    <div className="p-3 md:w-1/2 w-full">
                                        <h2 className="flex items-center gap-2">
                                            <h1 className='text-2xl font-bold'>{toy.toyName}</h1>
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p>{toy.description}</p>
                                        <div className='mt-10'>
                                            <button className=' bg-orange-500 px-3 py-2 rounded text-white font-bold'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default LeatestBlog;