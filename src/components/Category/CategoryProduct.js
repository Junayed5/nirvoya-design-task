import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';

const CategoryProduct = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className='flex flex-col lg:flex-row 2xl:flex-row lg:justify-between 2xl:justify-between '>
                <p className='text-sm lg:text-lg 2xl:text-lg text-[#42424180] ml-0 lg:ml-14 2xl:ml-14'>Showing  <span className='font-bold'>20</span> of <span className='font-bold'>160</span> product</p>
                <div className='flex'>
                    <p className='text-sm lg:text-lg 2xl:text-lg text-[#42424180] mr-5'>Sort by:</p>
                    <select className='h-6 lg:h-[40px] 2xl:h-[40px] w-[180px] bg-[#FAFAFA] text-sm lg:text-lg 2xl:text-lg text-[#424241] border' name="" id="">
                        <option value=""> Newest Items</option>
                    </select>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-x-0 lg:gap-x-4 2xl:gap-x-6 gap-y-20 lg:gap-y-3 2xl:gap-y-3 ml-5 lg:ml-10 2xl:ml-10'>
                {
                    products.filter(product => product.type === "normal").map(product => <Product product={product} />)
                }
            </div>

            <div className='flex justify-start lg:justify-end 2xl:justify-end gap-x-1s lg:gap-x-6 2xl:gap-x-6 mt-20 lg:my-5 2xl:my-7'>
                <div>
                    <button className='h-[50px] w-[100px] lg:w-[147px]  2xl:w-[147px] border bg-white text-[#0198E9]
                   text-sm lg:text-lg 2xl:text-lg font-semibold rounded-md'>Previous</button>
                </div>
                <div>
                    <button className='h-[50px] w-[40px] lg:w-[60px] 2xl:w-[60px] bg-[#0198E9] text-white text-lg font-semibold rounded-l-md'>1</button>
                    <button className='h-[50px] w-[40px] lg:w-[60px] 2xl:w-[60px] border bg-white text-[#0198E9] text-lg font-semibold'>2</button>
                    <button className='h-[50px] w-[40px] lg:w-[60px] 2xl:w-[60px] border bg-white text-[#0198E9] text-lg font-semibold rounded-r-md'>3</button>
                </div>
                <div>
                    <button className='h-[50px] w-[100px] lg:w-[147px]  2xl:w-[147px] border bg-white text-[#0198E9] text-lg font-semibold rounded-md'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;