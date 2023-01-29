import React from 'react';
import Footer from '../main/Footer';
import Menubar from '../main/Menubar';
import Navbar from '../main/Navbar';
import Category from './Category';
import Hero from './Hero';

const Home = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Navbar />
            <Menubar/>
            <hr className='mt-4' />
            <Hero/>
            <Category/>

            <Footer/>
        </div>
    );
};

export default Home;