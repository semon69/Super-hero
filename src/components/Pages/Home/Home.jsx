import React from 'react';
import Banner from './Banner';
import SubCategory from '../SubCategory/SubCategory';
import Gallery from '../Gallery/Gallery';
import TopTrending from '../ExtraSection/TopTrending';
import useTitle from '../../../hooks/useTitle';
import LeatestBlog from '../ExtraSection/LeatestBlog';
import BestSellingToy from '../BestSellingToy/BestSellingToy';

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
        </div>
    );
};

export default Home;