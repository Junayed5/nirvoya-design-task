import React from 'react';

const ReviewForm = () => {
    return (
        <div className='mx-12'>
            <h3 className='lg:text-xl 2xl:text-2xl font-bold py-5 text-[#383838]'>Add Your Review</h3>
            <p className='lg:text-base 2xl:text-xl text-[#A7A7A7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

            <div>
                <label className='lg:text-base 2xl:text-xl text-[#383838] font-semibold flex justify-start mt-5' htmlFor="">Name *</label>
                <input className='h-[60px] w-[745px] my-6 bg-[#FAFAFA] border rounded-md' type="text" />
                <label className='lg:text-base 2xl:text-xl text-[#383838] font-semibold flex justify-start' htmlFor="">Email *</label><br />
                <input className='h-[60px] w-[745px] bg-[#FAFAFA] border rounded-md' type="text" />
                <label className='lg:text-base 2xl:text-xl text-[#383838] font-semibold flex justify-start' htmlFor="">Review *</label>
                <input className='h-[119px] w-[745px] my-6 bg-[#FAFAFA] border rounded-md' type="text" />
            </div>

            <div className='flex my-5'>
                <p className='lg:text-base 2xl:text-lg font-semibold mr-3'>Rating</p>
                <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star.png" alt="" />
                <img className='lg:h-4 2xl:h-6 lg:w-4 2xl:w-6' src="star-empty.png" alt="" />
            </div>

            <button className='lg:h-[40px] 2xl:h-[60px] lg:w-[130px] 2xl:w-[180px] bg-[#0198E9] text-white lg:text-base 2xl:text-lg font-semibold rounded-md'>Submit</button>
        </div>
    );
};

export default ReviewForm;