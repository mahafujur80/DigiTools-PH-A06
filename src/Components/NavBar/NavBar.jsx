import { ShoppingCart } from 'lucide-react';
import React from 'react';

const NavBar = ({allCart}) => {
    return (
        <div className="navbar max-w-[1100px] h-auto  mx-auto bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="mr-1 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='font-[500] text-zinc-500'><a>Products</a></li>
                        <li className='font-[500] text-zinc-500'><a>Features</a></li>
                        <li className='font-[500] text-zinc-500'><a>Pricing</a></li>
                        <li className='font-[500] text-zinc-500'><a>Testimonials</a></li>
                        <li className='font-[500] text-zinc-500'><a>FAQ</a></li>
                    </ul>
                </div>
                <a className="max-sm:text-xl text-4xl  py-2 font-bold bg-linear-to-r from-[#5f2ee6] to-[#a55be6] bg-clip-text text-transparent">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-[500] text-zinc-500'><a>Products</a></li>
                    <li className='font-[500] text-zinc-500'><a>Features</a></li>
                    <li className='font-[500] text-zinc-500'><a>Pricing</a></li>
                    <li className='font-[500] text-zinc-500'><a>Testimonials</a></li>
                    <li className='font-[500] text-zinc-500'><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end">

                <div className="relative inline-block mr-2">
                    <ShoppingCart />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                        {allCart.length === 0? "": allCart.length}
                    </span>
                </div>

                <button className='text-xl max-sm:text-[10px]   font-semibold btn btn-ghost rounded-3xl text-zinc-600' >Login</button>
                <button className='btn max-sm:text-[10px] font-semibold linear-bg text-white rounded-3xl'>Get Started</button>
            </div>
        </div>
    );
};

export default NavBar;