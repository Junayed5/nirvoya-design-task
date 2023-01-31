import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../main/Footer';
import Menubar from '../main/Menubar';
import Navbar from '../main/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Menubar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;