import React from 'react';
import Lottie from "lottie-react";
import lotiie1 from "../../../LottieJson/lotiieBanner1.json"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='md:flex justify-between items-center gap-6 h-[700px]'>
                        <div className='text-white space-y-7 w-full'>
                            <h2 className='text-6xl font-bold'>Choose your favorite <br /> Super Heros</h2>
                            <p>We provide the best toys in the city.
                                Superhero toys are popular collectibles and playthings that are based on characters from comic books, movies, TV shows, and other media. These toys often allow fans of all ages to engage with their favorite superhero characters, whether through imaginative play or as items for display and collection</p>
                            <button className='bg-orange-500 px-3 py-2 rounded hover:bg-black'>See our Review</button>
                        </div>
                        <div>
                            <Lottie animationData={lotiie1}></Lottie>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:flex justify-between items-center gap-6 h-[700px]'>
                        <div className='text-white space-y-7 w-full'>
                            <h2 className='text-6xl font-bold'>Choose your favorite <br /> Super Heros</h2>
                            <p>We provide the best toys in the city.
                                Superhero toys are popular collectibles and playthings that are based on characters from comic books, movies, TV shows, and other media. These toys often allow fans of all ages to engage with their favorite superhero characters, whether through imaginative play or as items for display and collection</p>
                            <button className='bg-orange-500 px-3 py-2 rounded hover:bg-black'>See our Review</button>
                        </div>
                        <div className=''>
                            <Lottie animationData={lotiie1}></Lottie>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;