import React from 'react';

const MyOrder2 = () => {
    return (
        <div>
            <div className='h-[785px] w-[439px] bg-white rounded-md pb-9 pt-5 px-8 mx-7'>
                <p className='text-xl text-[#333333] font-bold mb-5'>My Orders</p>

                <div>
                    <div className='flex justify-between my-3'>
                        <p className='text-lg text-[#8D8D8D] font-semibold'>LED Monitor With High <br /> Quality In The World</p>
                        <p className='text-lg text-[#333333] font-semibold'>৳976.33</p>
                    </div>
                    <div className='flex justify-between my-4 mb-7'>
                        <p className='text-lg text-[#8D8D8D] font-semibold'>Magic Pen for iPad</p>
                        <p className='text-lg text-[#333333] font-semibold'>৳976.33</p>
                    </div>
                </div>
                <hr />

                <div className='my-8'>
                    <div className='flex justify-between my-3'>
                        <p className='text-lg text-[#8D8D8D] font-semibold'>Subtotal</p>
                        <p className='text-lg text-[#333333] font-semibold'>৳1,952.66</p>
                    </div>
                    <div className='flex justify-between my-4 mb-7'>
                        <p className='text-lg text-[#8D8D8D] font-semibold'>Free Shipping </p>
                        <p className='text-lg text-[#333333] font-semibold'>৳0</p>
                    </div>
                </div>

                <hr />

                <div className='flex justify-between my-6'>
                    <p className='text-lg text-[#333333] font-semibold'>Order Total </p>
                    <p className='text-3xl text-[#0198E9] font-semibold'>৳1,956.66</p>
                </div>

                <hr />

                <p className='text-xl text-[#333333] font-bold my-5'>Payment Methods</p>

                <div>
                    <div className='flex justify-between my-5'>
                        <div className='flex gap-x-3'>
                            <img className='w-fit h-fit my-1' src="tick3.png" alt="" />
                            <p className='text-lg text-[#757575]'>Cash on delivery</p>
                        </div>
                        <img className='w-10 h-8' src="cod.png" alt="" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <div className='flex gap-x-3'>
                            <span className='h-4 w-4 rounded-full border-2 border-[#99999999] my-1'></span>
                            <p className='text-lg text-[#757575]'>Pay with Bkash</p>
                        </div>
                        <img className='w-10 h-6' src="bkash.png" alt="" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <div className='flex gap-x-3'>
                            <span className='h-4 w-4 rounded-full border-2 border-[#99999999] my-1'></span>
                            <p className='text-lg text-[#757575]'>Pay with Nagad</p>
                        </div>
                        <img className='w-12 h-8' src="nagad.png" alt="" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <div className='flex gap-x-3'>
                            <span className='h-4 w-4 rounded-full border-2 border-[#99999999] my-1'></span>
                            <p className='text-lg text-[#757575]'>Pay with Rocket</p>
                        </div>
                        <img className='w-12 h-10' src="rocket.png" alt="" />
                    </div>
                </div>
                <button className='h-14 w-96 bg-[#0198E9] text-lg text-white font-bold rounded-md'>PLACE ORDER</button>
            </div>
        </div>
    );
};

export default MyOrder2;