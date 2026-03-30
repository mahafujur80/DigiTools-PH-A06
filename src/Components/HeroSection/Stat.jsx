import React from 'react';

const Stat = () => {
    return (
        <div className='w-full bg-[#5f2ee6] flex items-center justify-center py-5 mb-20'>
            <div className="w-[90%] mx-auto flex items-center justify-center max-md:gap-5 gap-15">
                <div className="">
                    <div className="max-md:text-xl text-3xl font-bold text-white">50K</div>
                    <div className="text-zinc-300">Active Use</div>
                </div>
                  <div className='h-15 w-px bg-gray-400'></div>
                <div className="">
                    <div className="max-md:text-xl text-3xl font-bold text-white">200+</div>
                    <div className="text-zinc-300">Premium Tools</div>
                </div>
                  <div className='h-15 w-px bg-gray-400'></div>
                <div className="">
                    <div className="max-md:text-xl text-3xl font-bold text-white">4.9</div>
                    <div className="text-zinc-300">Rating</div>
                </div>
            </div>
        </div>
    );
};

export default Stat;