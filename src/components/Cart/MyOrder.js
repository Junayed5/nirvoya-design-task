import React from 'react';

const MyOrder = () => {
    return (
        <div>
            <div className='h-[380px] lg:w-[350px] 2xl:w-[439px] bg-white rounded-md py-10 px-8 lg:mx-3 2xl:mx-7'>
                <p className='lg:text-lg 2xl:text-xl text-[#333333] font-semibold mb-5'>My Orders</p>
                <div className='flex justify-between my-3'>
                    <p className='lg:text-base 2xl:text-lg text-[#8D8D8D] font-semibold'>Subtotal</p>
                    <p className='lg:text-base 2xl:text-lg text-[#333333] font-semibold'>৳1,952.66</p>
                </div>
                <div className='flex justify-between my-4 mb-7'>
                    <p className='lg:text-base 2xl:text-lg text-[#8D8D8D] font-semibold'>Free Shipping </p>
                    <p className='lg:text-base 2xl:text-lg text-[#333333] font-semibold'>৳0</p>
                </div>

                <hr />

                <div className='flex justify-between my-6'>
                    <p className='lg:text-base 2xl:text-lg text-[#333333] font-semibold'>Order Total </p>
                    <p className='lg:text-2xl 2xl:text-3xl text-[#0198E9] font-semibold'>৳1,956.66</p>
                </div>

                <button className='h-14 lg:w-80 2xl:w-96 bg-[#0198E9] text-lg text-white font-bold rounded-md'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default MyOrder;