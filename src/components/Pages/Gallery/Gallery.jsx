import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold border-l-8 border-orange-500 text-white px-2'>Gallery</h1>
            <div className='my-7 '>
                <div className='text-center mb-8'>
                    <h1 className='text-5xl font-bold my-4 text-white'>Choose Your Favorite <br /> <span className='text-orange-500'>Toys Character</span> </h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    <div>
                        <img data-aos="fade-right" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2016/10/09/00/18/star-wars-1724901_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-down" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2018/12/12/23/32/small-3871893_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2019/12/15/23/29/hulk-4698161_640.jpg" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2016/12/13/04/22/toys-1903273_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-left" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2014/11/02/06/46/temptation-513494_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-right" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2022/06/05/11/06/action-figures-7243788_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-left" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2015/12/09/14/09/disney-1084772_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-right" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2019/08/25/06/43/captain-america-4428842_1280.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2019/02/26/11/48/small-4021843_1280.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-right" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2018/02/06/10/12/figure-3134373_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2019/11/04/02/06/iron-man-4599990_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up-left" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2019/05/12/05/37/clone-4197229_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-right" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2021/10/23/16/21/star-wars-6735310_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up-right" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2020/07/02/19/24/marvel-5364098_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-left" className='lg:w-full w-3/4 lg:h-64 rounded' src="https://cdn.pixabay.com/photo/2020/05/06/02/14/ironman-5135793_640.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Gallery;