import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';

const FooterMain = () => {
    return (
        <div className='bg-gray-900 w-full'>
            <div className='max-w-[1100px] max-md:w-[90%] mx-auto py-10 grid grid-cols-1 md:grid-cols-12 gap-2'>
                <div className='h-50 col-span-3 space-y-3'>
                    <h2 className='font-bold text-3xl text-white'>DigiTools</h2>
                    <p className='text-sm text-zinc-300'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <div className='h-50   col-span-2 space-y-3' >
                    <h2 className='font-bold text-2xl text-white'>Products</h2>
                    <ul className='cursor-pointer text-zinc-300 space-y-2'>
                        <li className='link-hover hover:text-white transition'><a>Features</a></li>
                        <li className='link-hover hover:text-white transition'><a>Pricing</a></li>
                        <li className='link-hover hover:text-white transition'><a>Templates</a></li>
                        <li className='link-hover hover:text-white transition'><a>Integrations</a></li>
                    </ul>
                </div>

                <div className='h-50 col-span-2 space-y-3' >
                    <h2 className='font-bold text-2xl text-white'>Company</h2>
                    <ul className='cursor-pointer  space-y-2 text-zinc-300'>
                        <li className='link-hover hover:text-white transition'><a>About</a></li>
                        <li className='link-hover hover:text-white transition'><a>Blog</a></li>
                        <li className='link-hover hover:text-white transition'><a>Careers</a></li>
                        <li className='link-hover hover:text-white transition'><a>Press</a></li>
                    </ul>
                </div>

                <div className='h-50  col-span-2 space-y-3'>
                    <h2 className='font-bold text-2xl text-white'>Resources</h2>
                    <ul className='cursor-pointer  space-y-2 text-zinc-300'>
                        <li className='link-hover hover:text-white transition'><a>Documentation</a></li>
                        <li className='link-hover hover:text-white transition'><a>Help Center</a></li>
                        <li className='link-hover hover:text-white transition'><a>Community</a></li>
                        <li className='link-hover hover:text-white transition'><a>Contact</a></li>
                    </ul>
                </div>

                <div className='h-50  col-span-3 space-y-5'>
                    <h2 className='font-bold text-2xl text-white'>Social Link </h2>

                    <div className='flex gap-5'>
                        <a className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition'><FaFacebook className='w-6 h-6' /></a>
                        <a className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition'><FaSquareInstagram className='w-6 h-6' /></a>
                        <a className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition'><FaXTwitter className='w-6 h-6' /></a>
                    </div>
                </div>
            </div>
            <div className='max-w-[1100px] max-md:w-[90%] mx-auto'>
                <div className='bg-zinc-400 h-px w-full'></div>
                <div className='flex items-center justify-between py-5 max-md:flex-col'>
                    <p className='text-zinc-300 text-xs'>&copy; {new Date().getFullYear()} DigiTools All Rights Reserved</p>
                    <p className='text-zinc-300 text-xs'>Privacy Policy           Terms of Service           Cookies</p>
                </div>
            </div>

        </div>
    );
};

export default FooterMain;