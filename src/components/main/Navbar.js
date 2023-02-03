import React from 'react';
import { BsMinecartLoaded, BsPerson, BsSearch } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci'
import Menubar from './Menubar';

const Navbar = () => {
    return (
        <div className='w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto'>
            <div className='flex justify-between'>
                <div>
                    <img src="https://i.ibb.co/P1dqzww/final-png-1.png" alt="" />
                </div>
                <div className='hidden lg:flex 2xl:flex my-5'>
                    <form action="">
                        <input placeholder="I'm looking for..." className='border h-[50px] lg:w-[600px] 2xl:w-[713px] bg-[#F6F6F6] rounded-l-md pl-5' type="text" />
                    </form>
                    <div className='h-[50px] w-[65px] bg-[#0198E9] text-white rounded-r-md'>
                        <BsSearch className='mx-auto my-4'/>
                    </div>
                </div>
                <div className='flex gap-[42px] my-8'>
                    <div className='flex'>
                        <BsPerson className='mt-1'/>
                        <p className='hidden lg:block 2xl:block'>Login</p>
                    </div>
                    <div className='flex'>
                        <CiHeart className='mt-1'/>
                        <p className='hidden lg:block 2xl:block'>Wishlist</p>
                    </div>
                    <div className='flex'>
                        <BsMinecartLoaded className='mt-1'/>
                        <p className='hidden lg:block 2xl:block'>My cart</p>
                        
                    </div>
                </div>
            </div>
            <Menubar/>
        </div>
    );
};

export default Navbar;