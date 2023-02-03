import React from 'react';

const Menubar = () => {
    return (
        <div className='w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto'>
            <ul className='grid grid-cols-3 lg:grid-cols-7 2xl:grid-cols-7 w-full text-center'>
                <li>Women's Fashion</li>
                <li>men's Fashion</li>
                <li>Kid's Fashion</li>
                <li className='hidden lg:block 2xl:block'>Home & Lifestyle</li>
                <li className='hidden lg:block 2xl:block'>Arts & Crafts</li>
                <li className='hidden lg:block 2xl:block'>Electronics</li>
                <li className='hidden lg:block 2xl:block'>Food & Grocery</li>
            </ul>
        </div>
    );
};

export default Menubar;