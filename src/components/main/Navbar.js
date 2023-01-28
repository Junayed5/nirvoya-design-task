import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsMinecartLoaded, BsPerson, BsSearch } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci'

const Navbar = () => {
    return (
        <div className='w-[1272px] mx-auto'>
            <div className='flex justify-between'>
                <div>
                    <img src="https://i.ibb.co/P1dqzww/final-png-1.png" alt="" />

                </div>
                <div className='flex my-5'>
                    <form action="">
                        <input className='border h-[50px] w-[713px] bg-[#F6F6F6] rounded-l-md' type="text" />
                    </form>
                    <div className='h-[50px] w-[65px] bg-[#0198E9] text-white rounded-r-md'>
                        <BsSearch className='mx-auto my-4'/>
                    </div>
                </div>
                <div className='flex gap-[42px] my-8'>
                    <div className='flex'>
                        <BsPerson className='mt-1'/>
                        <p>Login</p>
                    </div>
                    <div className='flex'>
                        <CiHeart className='mt-1'/>
                        <p>Wishlist</p>
                    </div>
                    <div className='flex'>
                        <BsMinecartLoaded className='mt-1'/>
                        My cart
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;