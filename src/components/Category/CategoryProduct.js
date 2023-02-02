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
            <div className='flex justify-between '>
                <p className='text-lg text-[#42424180] ml-14'>Showing  <span className='font-bold'>20</span> of <span className='font-bold'>160</span> product</p>
                <div className='flex'>
                    <p className='text-lg text-[#42424180] mr-5'>Sort by:</p>
                    <select className='h-[40px] w-[180px] bg-[#FAFAFA] text-lg text-[#424241] border' name="" id="">
                        <option value=""> Newest Items</option>
                    </select>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-x-6 gap-y-3 ml-10'>
                {
                    products.filter(product => product.type === "normal").map(product => <Product product={product} />)
                }
            </div>

            <div className='flex justify-end gap-x-6 my-7'>
                <div>
                    <button className='h-[50px] w-[147px] border bg-white text-[#0198E9] text-lg font-semibold rounded-md'>Previous</button>
                </div>
                <div>
                    <button className='h-[50px] w-[60px] bg-[#0198E9] text-white text-lg font-semibold rounded-l-md'>1</button>
                    <button className='h-[50px] w-[60px] border bg-white text-[#0198E9] text-lg font-semibold'>2</button>
                    <button className='h-[50px] w-[60px] border bg-white text-[#0198E9] text-lg font-semibold rounded-r-md'>3</button>
                </div>
                <div>
                    <button className='h-[50px] w-[147px] border bg-white text-[#0198E9] text-lg font-semibold rounded-md'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;