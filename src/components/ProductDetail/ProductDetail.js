import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import DetailBottom from './DetailBottom';
import Review from './Review';
import ReviewForm from './ReviewForm';

const ProductDetail = () => {
    return (
        <div className='w-[1400px] mx-auto bg-[#FAFAFA]'>
            <p className='flex text-[#757575] mt-10 mb-5'>Home <IoIosArrowForward className='mt-1' /> Men’s fashion <IoIosArrowForward className='mt-1' /> Men's Stand Collar Leather Jacket </p>

            <div className='flex'>
                <img src="leftSide.png" alt="" />

                <div className='ml-16'>
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
                    <hr />
                    <div className='my-3'>
                        <p className='text-lg flex justify-between w-[598px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                        <ul className='text-lg list-disc list-outside mx-10 my-3'>
                            <li className='my-2'>Direct Full Array</li>
                            <li className='my-2'>Quantum Dot Technology</li>
                            <li className='my-2'>Ambient Mode</li>
                            <li className='my-2'>One Remote Control</li>
                        </ul>
                    </div>

                    <div className='flex my-6 mt-8'>
                        <p className='text-lg font-semibold'>Size</p>

                        <div className='mt-1'>
                            <span className='text-center text-[#6E6E6F] bg-white px-3 py-1 mx-3 border' >S</span>
                            <span className='text-center text-white bg-[#0198E9] px-3 py-1 mx-3 border' >M</span>
                            <span className='text-center text-[#6E6E6F] bg-white px-3 py-1 mx-3 border' >L</span>
                            <span className='text-center text-[#6E6E6F] bg-white px-3 py-1 mx-3 border' >X</span>
                            <span className='text-center text-[#6E6E6F] bg-white px-3 py-1 mx-3 border' >XL</span>
                            <span className='text-center text-[#6E6E6F] bg-white px-3 py-1 mx-3 border' >XXL</span>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='flex mr-10 my-2'>
                            <p className='my-2 mr-3'>Quantity: </p>
                            <button className='h-[34px] w-[26px] bg-[#EFEFEF]'>-</button>
                            <button className='h-[34px] w-[26px] bg-white'>2</button>
                            <button className='h-[34px] w-[26px] bg-[#EFEFEF]'>+</button>
                        </div>

                        <button className='h-[45px] w-[165px] bg-[#0198E9] text-white text-lg'>Add cart</button>
                        <button className='h-[45px] w-[165px] bg-[#EBF4F9] border border-[#0198E9] text-[#0198E9] text-lg ml-8'>Buy Now</button>
                    </div>
                </div>
            </div>

            <DetailBottom/>
            <Review/>
            <ReviewForm/>
        </div>
    );
};

export default ProductDetail;