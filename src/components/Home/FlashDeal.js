import React, { useEffect, useState } from 'react';
import Product from './Product';

const FlashDeal = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 className='w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto my-7 text-xl font-semibold text-[#383838]'>Flash Deals</h1>
            <div className='w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 '>
                {
                    products
                        .filter(product => product.type === "flash")
                        .map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default FlashDeal;