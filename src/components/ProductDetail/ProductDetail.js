import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const ProductDetail = () => {
    return (
        <div className='w-[1400px] mx-auto'>
            <p className='flex text-[#757575] mt-10 mb-5'>Home <IoIosArrowForward className='mt-1' /> Men’s fashion <IoIosArrowForward className='mt-1' /> Men's Stand Collar Leather Jacket </p>

            <div className='flex'>
                <img src="leftSide.png" alt="" />

                <div>
                    <h2 className='text-2xl font-semibold'>Super Skinny Rib Trouser & Joggers for Men By <br />
                        Sowdagar Trouser</h2>

                    <div className='flex justify-between my-6'>
                        <div className='flex'>
                            <p className='text-lg font-semibold'>4.0</p>
                            <img className=' h-6 w-6' src="star.png" alt="" />
                            <img className=' h-6 w-6' src="star.png" alt="" />
                            <img className=' h-6 w-6' src="star.png" alt="" />
                            <img className=' h-6 w-6' src="star.png" alt="" />
                            <img className=' h-6 w-6' src="star-empty.png" alt="" />
                            <p className='text-[#BABABA]'>(223)</p>
                        </div>

                        <div className='flex'>
                            <img className='h-4 w-5 my-1 mx-2' src="tick.png" alt="" />
                            <p className='text-lg'><span className='font-semibold'>4,320</span> Sold</p>
                        </div>
                        <div className='flex'>
                            <img className='w-fit h-fit my-1 mx-2' src="love.png" alt="" />
                            <p className='text-xl font-semibold text-[#0198E9]'>Add to wishlist  </p>
                        </div>
                    </div>

                    <div className='my-6'>
                        <div className='flex'>
                            <h2 className='text-3xl text-[#0198E9] font-bold mr-4'>$976.33</h2>
                            <p className='text-lg text-[#8D8D8D] line-through px-3 py-1'>$1,020.99</p>
                            <button className='h-8 w-12 text-white text-center rounded-tl-md rounded-bl rounded-r-sm bg-gradient-to-r from-[#FF7A00] to-[#FFB800] '>20%</button>
                        </div>
                        <div className='flex my-4'>
                            <p className='text-sm text-[#757575] mr-2'><span className='font-bold text-[#3D3D3F]'>SKU: </span> 12314124124</p>
                            <div className='flex'>
                                <img className='h-fit w-fit my-1 mx-2' src="tick2.png" alt="" />
                                <p className='text-sm text-[#757575]'>In Stock</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                        <ul>
                            <li> Direct Full Array</li>
                            <li>Quantum Dot Technology</li>
                            <li>Ambient Mode</li>
                            <li> One Remote Control</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;