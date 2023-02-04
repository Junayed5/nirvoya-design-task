import React from 'react';
import ReviewForm from './ReviewForm';

const Review = () => {
    return (
        <div className='bg-white my-10'>
            <div className='my-8'>
                <img className='px-12 pt-5' src="Frame .png" alt="" />
            </div>

            <div className='mx-12'>
                <h2 className='lg:text-xl 2xl:text-2xl font-semibold py-3'>Reviews (4)</h2>
                <hr />
                <div className='my-7'>
                    <div>
                        <div className='flex'>
                            <img src="review.png" alt="" />
                            <div className='mx-5'>
                                <p className='lg:text-lg 2xl:text-xl font-semibold'>Vanille</p>
                                <div className='flex'>
                                    <p className='lg:text-sm 2xl:text-lg font-semibold mr-3'>5.0</p>
                                    <img className=' lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <p className='text-sm text-[#BABABA] ml-3'>1 month ago</p>
                                </div>
                            </div>
                        </div>
                        <p className='lg:text-lg 2xl:text-xl my-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div>
                        <div className='flex'>
                            <img src="review2.png" alt="" />
                            <div className='mx-5'>
                                <p className='lg:text-lg 2xl:text-xl font-semibold'>Vanille</p>
                                <div className='flex'>
                                    <p className='lg:text-sm 2xl:text-lg font-semibold mr-3'>5.0</p>
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <p className='text-sm text-[#BABABA] ml-3'>1 month ago</p>
                                </div>
                            </div>
                        </div>
                        <p className='lg:text-lg 2xl:text-xl my-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div>
                        <div className='flex'>
                            <img src="review3.png" alt="" />
                            <div className='mx-5'>
                                <p className='lg:text-lg 2xl:text-xl font-semibold'>Vanille</p>
                                <div className='flex'>
                                    <p className='lg:text-sm 2xl:text-lg font-semibold mr-3'>5.0</p>
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <p className='text-sm text-[#BABABA] ml-3'>1 month ago</p>
                                </div>
                            </div>
                        </div>
                        <p className='lg:text-lg 2xl:text-xl my-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div>
                        <div className='flex'>
                            <img src="review4.png" alt="" />
                            <div className='mx-5'>
                                <p className='lg:text-lg 2xl:text-xl font-semibold'>Vanille</p>
                                <div className='flex'>
                                    <p className='lg:text-sm 2xl:text-lg font-semibold mr-3'>5.0</p>
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                                    <p className='text-sm text-[#BABABA] ml-3'>1 month ago</p>
                                </div>
                            </div>
                        </div>
                        <p className='lg:text-lg 2xl:text-xl my-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>

            <ReviewForm/>
        </div>
    );
};

export default Review;