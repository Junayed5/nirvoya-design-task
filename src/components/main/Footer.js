import React from 'react';
import FooterBottom from './FooterBottom';

const Footer = () => {
    return (
        <div className=' bg-white'>
            <div className='w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 my-7 pt-20 lg:pt-10 2xl:pt-10 gap-y-5 2xl:gap-y-0'>
                <div className='flex'>
                    <img src="https://i.ibb.co/p4V9H7m/Vector-9.png" alt="" />
                    <div className='pl-4'>
                        <p className='font-semibold'>FREE SHIPPING</p>
                        <p className='text-base text-gray-400'>Order via Campaign</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src="https://i.ibb.co/HnmjJwN/Vector-10.png" alt="" />
                    <div className='pl-4'>
                        <p className='font-semibold'>Best Price</p>
                        <p className='text-base text-gray-400'>Quality products</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src="https://i.ibb.co/JvR4SSR/Vector-11.png" alt="" />
                    <div className='pl-4'>
                        <p className='font-semibold'>Best Price</p>
                        <p className='text-base text-gray-400'>Quality products</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src="https://i.ibb.co/fxkRXsm/Vector-12.png" alt="" />
                    <div className='pl-4'>
                        <p className='font-semibold'>Free Retern</p>
                        <p className='text-base text-gray-400'>Within 7 days returns</p>
                    </div>
                </div>  
            </div>
            <hr />
            <FooterBottom/>
        </div>
    );
};

export default Footer;