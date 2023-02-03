import React from 'react';
import MyOrder2 from './MyOrder2';

const Checkout = () => {
    return (
        <div className='w-[1400px] mx-auto '>
            <div className='my-14 flex'>
                <div className='h-[870px] w-[920px] bg-white rounded-md px-8 '>
                    <h3 className='text-3xl font-bold text-[#414B56] py-4 '>Shipping Details</h3>
                    <hr />

                    <p className='text-2xl text-[#333333] font-semibold pt-5'>Contact Information</p>
                    <div className='flex gap-x-10 my-6'>
                        <div>
                            <label className='flex justify-start text-lg text-[#636363] mb-3' htmlFor="">FIRST NAME</label>
                            <input className='box-border h-[45px] w-[400px] bg-[#FAFAFA] border rounded-sm mb-5' type="text" />
                            <label className='flex justify-start text-lg text-[#636363] mb-3' htmlFor="">EMAIL ADDRESS</label>
                            <input className='box-border h-[45px] w-[400px] bg-[#FAFAFA] border rounded-sm' type="text" />
                        </div>
                        <div>
                            <label className='flex justify-start text-lg text-[#636363] mb-3' htmlFor="">LAST NAME</label>
                            <input className='box-border h-[45px] w-[400px] bg-[#FAFAFA] border rounded-sm mb-5' type="text" />
                            <label className='flex justify-start text-lg text-[#636363] mb-3' htmlFor="">MOBILE NUMBER *</label>
                            <input className='box-border h-[45px] w-[400px] bg-[#FAFAFA] border rounded-sm' type="text" />
                        </div>
                    </div>

                    <p className='text-2xl text-[#333333] font-semibold mb-4 mt-2'>Shipping Address</p>
                    <div>
                        <label className='flex justify-start text-lg text-[#636363] mb-3' htmlFor="">Address Line 1  *</label>
                        <input className='box-border h-[45px] w-[839px] bg-[#FAFAFA] border rounded-sm mb-3' type="text" />
                        <label className='flex justify-start text-lg text-[#636363] mb-3' htmlFor="">Address Line 2  *</label>
                        <input className='box-border h-[45px] w-[839px] bg-[#FAFAFA] border rounded-sm' type="text" />
                    </div>

                    <div className='flex gap-x-10 my-4'>
                        <div>
                            <label className='flex justify-start text-lg text-[#636363] mb-3' htmlFor="">Country  *</label>
                            <select className='box-border h-[45px] w-[400px] bg-[#FAFAFA] border rounded-sm mb-5 text-[#636363]' type="text">
                                <option value="">Select Country</option>
                            </select>
                            <label className='flex justify-start text-lg text-[#636363] mb-3' htmlFor="">Select at district, state of province</label>
                            <input className='box-border h-[45px] w-[400px] bg-[#FAFAFA] border rounded-sm' type="text" />
                        </div>
                        <div>
                            <label className='flex justify-start text-lg text-[#636363] mb-3' htmlFor="">City/Area  *</label>
                            <select className='box-border h-[45px] w-[400px] bg-[#FAFAFA] border rounded-sm mb-5 text-[#636363]' type="text">
                                <option value="">Select City or Area</option>
                            </select>
                            <label className='flex justify-start text-lg text-[#636363] mb-3' htmlFor=""> Postal Code  *</label>
                            <input className='box-border h-[45px] w-[400px] bg-[#FAFAFA] border rounded-sm' type="text" />
                        </div>
                    </div>
                    <div className='flex mt-6'>
                        <input className='box-border h-7 w-7' type="checkbox" checked name="" id="" />
                        <p className='text-lg font-semibold ml-8'>Add to address book</p>
                    </div>
                </div>
                <MyOrder2 />
            </div>
        </div>
    );
};

export default Checkout;