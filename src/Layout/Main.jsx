import React from 'react';
import Navbar from '../components/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const Main = () => {
    return (
        <div className='bg-zinc-900'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;