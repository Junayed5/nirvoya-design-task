import React from 'react';
import Footer from '../main/Footer';
import Menubar from '../main/Menubar';
import Navbar from '../main/Navbar';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Menubar/>
            <hr className='mt-4' />
            <Hero/>


            <Footer/>
        </div>
    );
};

export default Home;