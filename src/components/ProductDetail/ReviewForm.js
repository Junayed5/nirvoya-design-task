import React from 'react';

const ReviewForm = () => {
    return (
        <div>
            <h3 className='text-2xl font-bold py-5 text-[#383838]'>Add Your Review</h3>
            <p className='text-xl text-[#A7A7A7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

            <div>
                <label className='text-xl text-[#383838] font-semibold' htmlFor="">Name *</label><br />
                <input className='h-[60px] w-[745px] bg-[#FAFAFA] border rounded-md' type="text" />
                <label className='text-xl text-[#383838] font-semibold' htmlFor="">Email *</label><br />
                <input className='h-[60px] w-[745px] bg-[#FAFAFA] border rounded-md' type="text" />
                <label className='text-xl text-[#383838] font-semibold' htmlFor="">Review *</label><br />
                <input className='h-[60px] w-[745px] bg-[#FAFAFA] border rounded-md' type="text" />
            </div>
        </div>
    );
};

export default ReviewForm;