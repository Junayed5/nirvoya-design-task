import React from 'react';
import CategoryProduct from './CategoryProduct';
import Related from './Related';

const Category = () => {
    return (
        <div className='bg-[#FAFAFA] my-20'>
            <div className='w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto flex flex-col lg:flex lg:flex-row 2xl:flex 2xl:flex-row'>
                <Related />
                <CategoryProduct/>
            </div>
        </div>
    );
};

export default Category;