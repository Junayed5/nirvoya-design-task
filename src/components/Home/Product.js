import React from 'react';

const Product = ({ product }) => {

    const { name, img, price, type } = product;

    return (
        <div className='h-[280px] lg:h-[380px] 2xl:h-[469px] w-[186px] lg:w-[245px] 2xl:w-[332px] bg-white rounded-md mb-5'>

            <div>
                {
                    type === "flash" && <div className='h-8 w-[91px] text-white text-center rounded-tl-md rounded-bl rounded-r-sm absolute bg-gradient-to-r from-[#FF7A00] to-[#FFB800] ml-2 '>
                        <p>-25% OFF</p>
                    </div>
                }
                <div className='w-full lg:w-[230px] 2xl:w-[315px] h-full lg:h-[240px] 2xl:h-[315px] bg-[#F2F2F2] ml-2 pt-2 static mt-3 rounded-md'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='flex my-3 ml-3'>
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star-empty.png" alt="" />
            </div>

            <p className='text-lg lg:text-lg 2xl:text-xl text-[#383838] font-semibold pl-3'>{name}</p>

            <div className='flex justify-between mx-2'>
                <p className='text-2xl text-[#0970CD] font-semibold'>৳{price}</p>
                <img className='w-6 h-5' src="add-cart.png" alt="" />
            </div>
        </div>
    );
};

export default Product;