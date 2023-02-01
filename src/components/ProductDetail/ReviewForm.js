import React from 'react';

const ReviewForm = () => {
    return (
        <div className='mx-12'>
            <h3 className='text-2xl font-bold py-5 text-[#383838]'>Add Your Review</h3>
            <p className='text-xl text-[#A7A7A7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

            <div>
                <label className='text-xl text-[#383838] font-semibold flex justify-start mt-5' htmlFor="">Name *</label>
                <input className='h-[60px] w-[745px] my-6 bg-[#FAFAFA] border rounded-md' type="text" />
                <label className='text-xl text-[#383838] font-semibold flex justify-start' htmlFor="">Email *</label><br />
                <input className='h-[60px] w-[745px] bg-[#FAFAFA] border rounded-md' type="text" />
                <label className='text-xl text-[#383838] font-semibold flex justify-start' htmlFor="">Review *</label>
                <input className='h-[119px] w-[745px] my-6 bg-[#FAFAFA] border rounded-md' type="text" />
            </div>

            <div className='flex my-5'>
                <p className='text-lg font-semibold mr-3'>Rating</p>
                <img className=' h-6 w-6' src="star.png" alt="" />
                <img className=' h-6 w-6' src="star.png" alt="" />
                <img className=' h-6 w-6' src="star.png" alt="" />
                <img className=' h-6 w-6' src="star.png" alt="" />
                <img className=' h-6 w-6' src="star-empty.png" alt="" />
            </div>

            <button className='h-[60px] w-[180px] bg-[#0198E9] text-white text-lg font-semibold rounded-md'>Submit</button>
        </div>
    );
};

export default ReviewForm;