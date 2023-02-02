import React from 'react';

const Related = () => {
    return (
        <div className='h-[694px] w-[300px] bg-white'>
            <div className='mx-6 py-8' >
                <h3 className='text-xl text-[#3D3D3F] font-semibold'>Related Categories</h3>
                <ul>
                    <li className='text-lg text-[#757575] font-semibold list-disc ml-2'>Men’s fashion</li>
                </ul>
                <ul className='text-lg text-[#757575] font-semibold ml-5'>
                    <li>Men’s Jacket</li>
                    <li className='text-[#0198E9]'>Men’s Jacket</li>
                    <li>Casual Shirts</li>
                    <li>Summer T-Shirts</li>
                </ul>
            </div>
            <hr />
            <div>
                <img className='my-7 mx-4' src="price.png" alt="" />
            </div>
            <hr />

            <div>
                <img className='mt-6 mx-4' src="rating.png" alt="" />
            </div>
        </div>
    );
};

export default Related;