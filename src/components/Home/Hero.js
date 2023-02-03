import React from 'react';

const Hero = () => {
    return (
        <div className='w-[1400px] my-6 flex gap-9 mx-auto'>
            <div className='w-[926px] h-[564px] bg-[#EBF0F9] flex rounded-2xl'>
                <div className='w-[486px] ml-9 my-auto'>
                    <h2 className='text-4xl font-bold text-[#0970CD]'>Explore Men’s <br /> Winter Collection</h2>
                    <p className='text-lg text-[#646464] mt-7'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor. </p>

                    <button className='w-36 h-11 bg-[#0198E9] text-white font-semibold rounded-md mt-7'>SHOP NOW</button>
                </div>
                <img className=' rounded-r-2xl' src="handsome.png" alt="" />
            </div>

            <div className='w-[477px] hero2'>
                <div
                    style={{ backgroundImage: `url('delivery-concept.png')`, backgroundRepeat: "no-repeat", }}
                    className="h-[247px] w-[415px] rounded-2xl mb-14 mt-3"
                >

                    <button
                        className='w-64 h-14 bg-[#FAFAFACC] text-lg text-[#0198E9] font-semibold rounded-md mx-20 mt-44'
                    >Groceries collection</button>

                </div>
                <div
                    style={{ backgroundImage: `url('delivery-concept-2.png')`, backgroundRepeat: "no-repeat", }}
                    className="h-[247px] w-[415px] rounded-2xl"
                >

                    <button
                        className='w-64 h-14 bg-[#FAFAFACC] text-lg text-[#0198E9] font-semibold rounded-md mx-20 mt-44'
                    >Health & Beauty collection</button>

                </div>
            </div>
        </div>
    );
};

export default Hero;