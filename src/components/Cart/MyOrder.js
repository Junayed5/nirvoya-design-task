import React from 'react';

const MyOrder = () => {
    return (
        <div>
            <div className='h-[380px] w-[439px] bg-white rounded-md py-10 px-8 mx-7'>
                <p className='text-xl text-[#333333] font-semibold mb-5'>My Orders</p>
                <div className='flex justify-between my-3'>
                    <p className='text-lg text-[#8D8D8D] font-semibold'>Subtotal</p>
                    <p className='text-lg text-[#333333] font-semibold'>৳1,952.66</p>
                </div>
                <div className='flex justify-between my-4 mb-7'>
                    <p className='text-lg text-[#8D8D8D] font-semibold'>Free Shipping </p>
                    <p className='text-lg text-[#333333] font-semibold'>৳0</p>
                </div>

                <hr />

                <div className='flex justify-between my-6'>
                    <p className='text-lg text-[#333333] font-semibold'>Order Total </p>
                    <p className='text-3xl text-[#0198E9] font-semibold'>৳1,956.66</p>
                </div>

                <button className='h-14 w-96 bg-[#0198E9] text-lg text-white font-bold rounded-md'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default MyOrder;