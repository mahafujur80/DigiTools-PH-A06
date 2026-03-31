import React from 'react';

const FirstFooter = () => {
    return (
        <div className='bg-[#5f2ee6] flex items-center justify-center p-10'>
            <div className='text-center space-y-3'>
                <div>
                    <h1 className='font-bold text-4xl max-md:text-2xl text-white'>Ready to Transform Your Workflow?</h1>
                    <p className='text-zinc-300 max-md:text-sm'>Join thousands of professionals who are already using Digitools to work smarter.
                        Start your free trial today.</p>
                </div>
                <div className='flex justify-center gap-2'>
                    <button className='btn rounded-3xl text-[#5f2ee6] bg-white hover:-translate-y-1 transition duration-150'>Explore Products</button>
                    <button className='btn rounded-3xl text-white bg-[#5f2ee6] hover:-translate-y-1 transition duration-150'>View Pricing</button>
                </div>
                <p className='text-zinc-300 text-sm'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default FirstFooter;