import React from 'react';
import { BsMinecartLoaded } from 'react-icons/bs';

const Product = () => {
    return (
        <div className='h-[469px] w-[332px] bg-white rounded-md'>
            <div>
                <img className='ml-3 pt-2' src="https://i.ibb.co/qx19r0t/unsplash-YS6d-Ifm5-Tq-A.png" alt="" />
            </div>
            <div className='flex my-3 ml-3'>
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star-empty.png" alt="" />
            </div>

            <p className='text-xl text-[#383838] font-semibold pl-3'>Headrest Executive Mesh Office Chair set</p>

            <div className='flex justify-between mx-2'>
                <p className='text-2xl text-[#0970CD] font-semibold'>৳10500</p>
                <img className='w-6 h-5' src="add-cart.png" alt="" />
            </div>
        </div>
    );
};

export default Product;