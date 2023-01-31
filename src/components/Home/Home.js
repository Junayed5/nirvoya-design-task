import React from 'react';
import Footer from '../main/Footer';
import AllProducts from './AllProducts';
import Category from './Category';
import FlashDeal from './FlashDeal';
import Hero from './Hero';

const Home = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <hr className='mt-4' />
            <Hero/>
            <Category/>
            <FlashDeal/>
            <AllProducts/>
        </div>
    );
};

export default Home;