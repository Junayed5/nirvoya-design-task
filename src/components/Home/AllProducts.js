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
            <h1 className='w-[1400px] mx-auto my-7 text-xl font-semibold text-[#383838]'>Featured Product</h1>
            <div className='w-[1400px] mx-auto grid grid-cols-4 container-product lg:gap-y-4'>
                {
                    products
                        .map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default AllProducts;