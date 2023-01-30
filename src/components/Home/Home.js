import React from 'react';
import Footer from '../main/Footer';
import Menubar from '../main/Menubar';
import Navbar from '../main/Navbar';
import Category from './Category';
import FlashDeal from './FlashDeal';
import Hero from './Hero';

const Home = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <Navbar />
            <Menubar/>
            <hr className='mt-4' />
            <Hero/>
            <Category/>
            <FlashDeal/>
            <Footer/>
        </div>
    );
};

export default Home;