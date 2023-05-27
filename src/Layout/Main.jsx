import React from 'react';
import Navbar from '../components/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl w-full mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;