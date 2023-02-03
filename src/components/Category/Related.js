import React from 'react';

const Related = () => {
    return (
        <div className='h-[700px] w-[300px] bg-white'>
            <div className='mx-6 py-8' >
                <h3 className='text-xl text-[#3D3D3F] font-semibold'>Related Categories</h3>
                <ul>
                    <li className='text-lg text-[#757575] font-semibold ml-2'>Men’s fashion</li>
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

            <div className='mx-5 my-6'>
                <div className='flex justify-between my-3'>
                    <h3 className='text-lg text-[#383838] font-extrabold'>Filter by Rating</h3>
                    <img className='w-fit h-fit my-2' src="icon.png" alt="" />
                </div>

                <div>
                    <div className='flex my-3 '>
                        <input className='box-border h-7 w-7 mr-4' type="checkbox" name="" id="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                    </div>
                    <div className='flex my-3 '>
                        <input className='box-border h-7 w-7 mr-4' type="checkbox" name="" id="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                    </div>
                    <div className='flex my-3 '>
                        <input className='box-border h-7 w-7 mr-4' type="checkbox" name="" id="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                    </div>
                    <div className='flex my-3 '>
                        <input className='box-border h-7 w-7 mr-4' checked type="checkbox" name="" id="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                    </div>
                    <div className='flex my-3 '>
                        <input className='box-border h-7 w-7 mr-4' type="checkbox" name="" id="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                        <img className='w-6 h-6' src="star.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Related;