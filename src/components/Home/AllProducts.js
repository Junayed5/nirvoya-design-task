import React, { useEffect, useState } from 'react';
import Product from './Product';

const AllProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 className='w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto pt-20 lg:pt-0 2xl:pt-0 my-7 text-xl font-semibold text-[#383838]'>Featured Product</h1>
            <div className='w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-y-24 lg:gap-y-14 xl:gap-y-0'>
                {
                    products
                        .map(product => <Product key={product.id} product={product} />)
                }

            </div>
            <div className='flex justify-center my-5'>
                <button className='h-[45px] w-[175px] bg-[#34ADED] rounded-full text-white flex justify-center items-center'>Show more <img className='ml-2' src="icon2.png" alt="" /></button>
            </div>
        </div>
    );
};

export default AllProducts;