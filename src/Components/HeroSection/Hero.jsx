import React from 'react';
import banner from '../../assets/banner.png'
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <div className='max-w-[1100px] max-md:w-[90%]  mx-auto flex items-center max-md:flex-col gap-10 my-10 '>
            <div className='space-y-3 pr-10 max-md:w-[90%] w-[50%] '>
                <div className='max-md:text-xs flex items-center gap-2 rounded-3xl badge badge-primary badge-soft '>
                    <div className='w-2 h-2 rounded-full bg-[#6608b8] animate-ping' ></div>
                    New: AI-Powered Tools Available</div>
                <div className='space-y-3'>
                    <h1 className='font-bold text-5xl max-md:text-2xl'>Supercharge Your <span className=' bg-linear-to-r from-[#5f2ee6] to-[#a55be6] bg-clip-text text-transparent'> Digital Workflow</span></h1>
                    <p className='text-zinc-500'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                </div>
                <div className='max-md:flex '>
                    <button className='btn hover:-translate-y-1 transition duration-150  linear-bg text-white rounded-3xl max-md:mr-1 mr-5'>Explore Products</button>
                    <button className='btn hover:-translate-y-1 transition duration-150 border-[#5f2ee6]  rounded-3xl bg-linear-to-r from-[#5f2ee6] to-[#a55be6] bg-clip-text text-transparent'><Play className="w-4 h-4 text-[#5f2ee6]" /> Watch Demo</button>
                </div>
            </div>

            <div className='max-md:'>
                <img src={banner} alt="banner-image" />
            </div>
        </div>
    );
};

export default Hero;