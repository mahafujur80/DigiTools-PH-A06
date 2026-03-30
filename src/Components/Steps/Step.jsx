import React from 'react';
import user from '../../assets/user.png'
import pack from '../../assets/package.png'
import rocket from '../../assets/rocket.png'
const Step = () => {
    return (
        <div className='w-full bg-gray-100 py-10'>
            <div className='max-w-[1100px] max-md:w-[90%] mx-auto'>
                <div className='text-center space-y-2'>
                    <h1 className='text-4xl max-md:text-2xl font-bold'>Get Started in 3 Steps</h1>
                    <p className=' text-zinc-500 max-md:text-sm'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
                    <div className=' p-10 space-y-3 bg-white rounded-xl hover:-translate-y-1.5 hover:shadow-xl transition duration-300'>
                        <div className='relative flex items-center justify-end  text-white '>
                            <div className='absolute w-7 h-7 rounded-full linear-bg text-center'>
                                01
                            </div>
                        </div>
                        <div className='flex items-center justify-center flex-col text-center space-y-3'>
                            <div className='w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center'> <img src={user} alt="cart-picture" /></div>
                            <h1 className='font-bold text-2xl'>Create Account</h1>
                            <p className='text-sm text-zinc-500'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>

                    <div className=' p-10 space-y-3 bg-white rounded-xl hover:-translate-y-1.5 hover:shadow-xl transition duration-300'>
                        <div className='relative flex items-center justify-end  text-white '>
                            <div className='absolute w-7 h-7 rounded-full linear-bg text-center'>
                                02
                            </div>
                        </div>
                        <div className='flex items-center justify-center flex-col text-center space-y-3'>
                            <div className='w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center'> <img src={pack} alt="cart-picture" /></div>
                            <h1 className='font-bold text-2xl'>Choose Products</h1>
                            <p className='text-sm text-zinc-500'>Browse our catalog and select the tools
                                that fit your needs.</p>
                        </div>
                    </div>

                    <div className=' p-10 space-y-3 bg-white rounded-xl hover:-translate-y-1.5 hover:shadow-xl transition duration-300'>
                        <div className='relative flex items-center justify-end  text-white '>
                            <div className='absolute w-7 h-7 rounded-full linear-bg text-center'>
                                03
                            </div>
                        </div>
                        <div className='flex items-center justify-center flex-col text-center space-y-3'>
                            <div className='w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center'> <img src={rocket} alt="cart-picture" /></div>
                            <h1 className='font-bold text-2xl'></h1>
                            <p className='text-sm text-zinc-500'>Download and start using your premium 
tools immediately.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Step;