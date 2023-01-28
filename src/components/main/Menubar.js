import React from 'react';

const Menubar = () => {
    return (
        <div className='w-[1272px] mx-auto'>
            <ul className='grid grid-cols-7 w-full text-center'>
                <li>Women's Fashion</li>
                <li>men's Fashion</li>
                <li>Kid's Fashion</li>
                <li>Home & Lifestyle</li>
                <li>Arts & Crafts</li>
                <li>Computer & Electronics</li>
                <li>Food & Grocery</li>
            </ul>
        </div>
    );
};

export default Menubar;