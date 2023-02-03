import React from 'react';
import MyOrder from './MyOrder';

const Cart = () => {
    return (
        <div className='w-[1400px] mx-auto my-10 flex'>
            <div>
                <div className='h-[88px] w-[937px] bg-white flex justify-between rounded-md'>
                    <div className='flex gap-x-10 my-7 mx-7'>
                        <input className='box-border h-7 w-7' type="checkbox" name="" id="" />
                        <p className='text-lg font-semibold text-[#333333]'>Select All</p>
                    </div>
                    <div className='flex my-7 mx-16 gap-2'>
                        <img className='w-fit h-fit my-1' src="delete.png" alt="" />
                        <p className='text-lg font-semibold text-[#A4A4A4] '>Remove</p>
                    </div>
                </div>

                <div className='h-[190px] w-[937px] bg-white flex justify-between rounded-md my-5'>
                    <div className='flex gap-x-8 pl-7'>
                        <input className='box-border h-7 w-7 my-20' type="checkbox" name="" id="" />
                        <img className='h-[130px] w-[130px] my-7' src="https://i.ibb.co/ZdhGzRX/Image-Placeholder-4.png" alt="" />
                    </div>

                    <div className='my-7 ml-4'>
                        <h4 className='text-xl font-semibold text-[#333333] mb-4'>Headrest Executive Mesh Office Chair set</h4>
                        <h3 className='text-xl font-bold text-[#0198E9]'>৳976.33</h3>
                    </div>

                    <div className='flex my-7 mx-16 gap-2 relative'>
                        <p className='absolute text-lg ml-11'>SKU 12314124124</p>
                        <div className='flex gap-x-5 items-end mb-3'>
                            <div className='flex bg-white border rounded-md shadow-inner shadow-[#D8D8D8] h-14 w-[120px]'>
                                <p className='text-3xl pl-3 text-[#D2D2D2] font-bold py-1'>-</p>
                                <p className='text-2xl px-6 font-semibold text-[#0198E9] py-2'>1</p>
                                <p className='text-3xl px-1 text-[#D2D2D2] font-bold py-1'>+</p>
                            </div>
                            <div className='h-14 w-[60px] border'>
                                <img className='w-fit h-fit mx-auto my-3' src="delete.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[190px] w-[937px] bg-white flex justify-between rounded-md my-5'>
                    <div className='flex gap-x-8 pl-7'>
                        <input className='box-border h-7 w-7 my-20' type="checkbox" checked name="" id="" />
                        <img className='h-[130px] w-[130px] my-7' src="https://i.ibb.co/LnBgYts/Image-Placeholder.png" alt="" />
                    </div>

                    <div className='my-7 ml-4'>
                        <h4 className='text-xl font-semibold text-[#333333] mb-4'>Headrest Executive Mesh Office Chair set</h4>
                        <h3 className='text-xl font-bold text-[#0198E9]'>৳976.33</h3>
                    </div>

                    <div className='flex my-7 mx-16 gap-2 relative'>
                        <p className='absolute text-lg ml-11'>SKU 12314124124</p>
                        <div className='flex gap-x-5 items-end mb-3'>
                            <div className='flex bg-white border rounded-md shadow-inner shadow-[#D8D8D8] h-14 w-[120px]'>
                                <p className='text-3xl pl-3 text-[#D2D2D2] font-bold py-1'>-</p>
                                <p className='text-2xl px-6 font-semibold text-[#0198E9] py-2'>1</p>
                                <p className='text-3xl px-1 text-[#D2D2D2] font-bold py-1'>+</p>
                            </div>
                            <div className='h-14 w-[60px] border'>
                                <img className='w-fit h-fit mx-auto my-3' src="delete.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[190px] w-[937px] bg-white flex justify-between rounded-md my-5'>
                    <div className='flex gap-x-8 pl-7'>
                        <input className='box-border h-7 w-7 my-20' type="checkbox" checked name="" id="" />
                        <img className='h-[130px] w-[130px] my-7' src="https://i.ibb.co/2nvsXtM/Image-Placeholder-6.png" alt="" />
                    </div>

                    <div className='my-7 ml-4'>
                        <h4 className='text-xl font-semibold text-[#333333] mb-4'>Headrest Executive Mesh Office Chair set</h4>
                        <h3 className='text-xl font-bold text-[#0198E9]'>৳976.33</h3>
                    </div>

                    <div className='flex my-7 mx-16 gap-2 relative'>
                        <p className='absolute text-lg ml-11'>SKU 12314124124</p>
                        <div className='flex gap-x-5 items-end mb-3'>
                            <div className='flex bg-white border rounded-md shadow-inner shadow-[#D8D8D8] h-14 w-[120px]'>
                                <p className='text-3xl pl-3 text-[#D2D2D2] font-bold py-1'>-</p>
                                <p className='text-2xl px-6 font-semibold text-[#0198E9] py-2'>1</p>
                                <p className='text-3xl px-1 text-[#D2D2D2] font-bold py-1'>+</p>
                            </div>
                            <div className='h-14 w-[60px] border'>
                                <img className='w-fit h-fit mx-auto my-3' src="delete.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MyOrder />
        </div>
    );
};

export default Cart;