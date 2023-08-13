import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Pagination, FreeMode } from 'swiper/modules';

const BestSellingToy = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('/bestSellingToy.json')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className='my-10 max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold border-l-8 border-orange-500 text-white px-2 my-8'>Best Selling Toys</h1>
            <Swiper
                // slidesPerView={1}
                // spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                freeMode={true}

                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    toys.map(toy =>

                        <SwiperSlide>
                            <div className='bg-white h-[480px] rounded'>
                                <img className='h-[300px] w-full' src={toy.image} alt="" />
                                <div className='p-4 space-y-2'>
                                    <p className='text-2xl font-bold text-orange-500'>{toy.toyName}</p>
                                    <p className='font-bold'>{toy.toyDescription}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default BestSellingToy;