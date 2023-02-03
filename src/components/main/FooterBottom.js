import React from 'react';

const FooterBottom = () => {
    return (
        <div>
            <div className='w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto flex flex-col-reverse lg:flex-row lg:gap-x-16 2xl:flex-row 2xl:gap-x-28 my-8 container-footer'>
                <div>
                    <img src="https://i.ibb.co/P1dqzww/final-png-1.png" alt="" />
                    <p className='w-80 h-20 flex justify-between mt-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <img className='mt-7' src="Follow.png" alt="" />
                </div>
                <div className='lg:ml-5 2xl:ml-10 w-[122px]'>
                    <h3 className='text-lg font-semibold w-[122px]'>QUICK LINKS</h3>
                    <ul className='text-[#333333CC] mt-6'>
                        <li className='py-3'>About us</li>
                        <li className='py-3'>Contact us</li>
                        <li className='py-3'>Products</li>
                        <li className='py-3'>Login</li>
                        <li className='py-3'>Sign Up</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-semibold w-[150px]'>CUSTOMER AREA</h3>
                    <ul className='text-[#333333CC] mt-6'>
                        <li className='py-3'>My Account</li>
                        <li className='py-3'>Orders</li>
                        <li className='py-3'>Terms </li>
                        <li className='py-3'>Privacy Policy</li>
                        <li className='py-3'>Shipping Information</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>CONTACT</h3>
                    <p className='text-[#333333CC] mt-6 w-[340px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <div className='flex gap-4 mt-9'>
                        <img src="headphone.png" alt="" />
                        <div>
                            <p>Have any question?</p>
                            <p className='text-2xl text-[#0198E9] font-bold'>099 456 789</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto flex justify-between my-3'>
                <p className='text-base text-[#757575]'>Projectnirvoya -   © 2021 All Rights Reserved</p>
                <div className='hidden lg:flex 2xl:flex'>
                    <p className='text-[#0198E9CC] pt-1 font-semibold'>Pay With</p>
                    <img src="pay.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;