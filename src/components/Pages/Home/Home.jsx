import React from 'react';
import Banner from './Banner';
import SubCategory from '../SubCategory/SubCategory';
import Gallery from '../Gallery/Gallery';
import TopTrending from '../ExtraSection/TopTrending';
import useTitle from '../../../hooks/useTitle';
import LeatestBlog from '../ExtraSection/LeatestBlog';
import BestSellingToy from '../BestSellingToy/BestSellingToy';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
            <LeatestBlog></LeatestBlog>
            <TopTrending></TopTrending>
            <BestSellingToy></BestSellingToy>
            <div className='max-w-7xl mx-auto my-8'>
                <h1 className='text-5xl font-bold border-l-8 border-orange-500 text-white px-2'>Contact Us</h1>
            </div>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;