import React from 'react';

const Banner = () => {
    return (
        <div className='w-full max-w-7xl mx-auto'>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg" className="w-full h-[600px]" />
                    <div className="absolute h-full bg-gradient-to-r from-[#141212] to-[rgba(21, 21, 21, 0)] p-12">
                        <div className='text-white space-y-7 w-full text-center'>
                            <h2 className='text-6xl font-bold'>Choose your favorite <br /> Super Heros</h2>
                            <p>We provide the best toys in the city</p>
                            <button className='btn btn-ghost underline hover:bg-black'>See our Review</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://cdn.pixabay.com/photo/2016/11/23/14/41/characters-1853286_640.jpg" className="w-full h-[600px]" />
                    <div className="absolute h-full bg-gradient-to-r from-[#141212] to-[rgba(21, 21, 21, 0)] p-12">
                        <div className='text-white space-y-7 w-full text-center'>
                            <h2 className='text-6xl font-bold'>Choose your favorite <br /> Super Heros</h2>
                            <p>We provide the best toys in the city</p>
                            <button className='btn btn-ghost underline hover:bg-black'>See our Review</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://cdn.pixabay.com/photo/2015/09/09/19/29/lego-932781_640.jpg" className="w-full h-[600px]" />
                    <div className="absolute h-full bg-gradient-to-r from-[#141212] to-[rgba(21, 21, 21, 0)] p-12">
                        <div className='text-white space-y-7 w-full text-center'>
                            <h2 className='text-6xl font-bold'>Choose your favorite <br /> Super Heros</h2>
                            <p>We provide the best toys in the city</p>
                            <button className='btn btn-ghost underline hover:bg-black'>See our Review</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://cdn.pixabay.com/photo/2018/12/21/21/14/yoda-3888783_640.jpg" className="w-full h-[600px]" />
                    <div className="absolute h-full bg-gradient-to-r from-[#141212] to-[rgba(21, 21, 21, 0)] p-12">
                        <div className='text-white space-y-7 w-full text-center'>
                            <h2 className='text-6xl font-bold'>Choose your favorite <br /> Super Heros</h2>
                            <p>We provide the best toys in the city</p>
                            <button className='btn btn-ghost underline hover:bg-black'>See our Review</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;