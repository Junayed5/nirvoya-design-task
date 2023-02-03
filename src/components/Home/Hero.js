import React from 'react';

const Hero = () => {
    return (
        <div className='w-full lg:w-[1200px] 2xl:w-[1400px] my-6 flex gap-5 lg:mx-5 2xl:mx-auto'>
            <div className='w-[387px] lg:w-[900px] 2xl:w-[926px] h-[200px] lg:h-[480px] 2xl:h-[564px] bg-[#EBF0F9] flex rounded-2xl'>
                <div className='w-[184px] lg:w-[486px] 2xl:w-[486px] ml-9 my-auto'>
                    <h2 className='text-xl lg:text-4xl 2xl:text-4xl font-extrabold text-[#0970CD]'>Explore Men’s <br /> Winter Collection</h2>

                    <p className='text-sm lg:text-lg 2xl:text-lg text-[#646464] mt-2 lg:mt-7 2xl:mt-7'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor. </p>

                    <button className='w-28 lg:w-36 2xl:w-36 h-7 lg:h-11 2xl:h-11 bg-[#0198E9] text-white font-semibold rounded-md mt-2 lg:mt-7 2xl:mt-7 text-sm 2xl:text-lg'>SHOP NOW</button>
                </div>
                <img className=' rounded-r-2xl' src="handsome.png" alt="" />
            </div>

            <div className='hidden lg:block 2xl:block lg:w-[377px] 2xl:w-[477px]'>
                <div
                    style={{ backgroundImage: `url('delivery-concept.png')`, backgroundRepeat: "no-repeat", backgroundSize: " 400px 230px " }}
                    className="h-[230px] w-[400px] rounded-2xl mb-5"
                >

                    <button
                        className='w-64 h-14 bg-[#FAFAFACC] text-lg text-[#0198E9] font-semibold rounded-md mx-20 mt-40'
                    >Groceries collection</button>

                </div>
                <div
                    style={{ backgroundImage: `url('delivery-concept-2.png')`, backgroundRepeat: "no-repeat", backgroundSize: " 400px 230px " }}
                    className="h-[230px] w-[400px] rounded-2xl"
                >

                    <button
                        className='w-64 h-14 bg-[#FAFAFACC] text-lg text-[#0198E9] font-semibold rounded-md mx-20 mt-40'
                    >Health & Beauty collection</button>

                </div>
            </div>
        </div>
    );
};

export default Hero;