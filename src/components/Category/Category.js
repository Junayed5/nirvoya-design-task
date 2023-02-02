import React from 'react';
import CategoryProduct from './CategoryProduct';
import Related from './Related';

const Category = () => {
    return (
        <div className='bg-[#FAFAFA] my-20'>
            <div className='w-[1400px] mx-auto flex'>
                <Related />
                <CategoryProduct/>
            </div>
        </div>
    );
};

export default Category;