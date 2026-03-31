import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div className='max-w-[1100px] max-md:w-[90%] mx-auto py-10'>
            <div className='text-center space-y-2'>
                <h1 className='text-4xl max-md:text-2xl font-bold'>Simple, Transparent Pricing</h1>
                <p className=' text-zinc-500 max-md:text-sm'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20'>
                <div className='bg-gray-100 hover:shadow-xl hover:-translate-x-2 transition duration-200 rounded-xl space-y-2 p-7 flex flex-col justify-between'>
                    <div>
                        <h1 className='font-bold text-2xl'>Starter</h1>
                        <p className='text-zinc-500'>Perfect for getting started</p>
                    </div>

                    <h1 className='text-zinc-500'><span className='font-bold text-black text-2xl'>$0</span>/month</h1>

                    <div>
                        <p className='flex gap-2 text-zinc-600'><Check className='text-green-500' />Access to 10 free tools</p>
                        <p className='flex gap-2 text-zinc-600'><Check className='text-green-500' />Basic templates</p>
                        <p className='flex gap-2 text-zinc-600'><Check className='text-green-500' />Community support</p>
                        <p className='flex gap-2 text-zinc-600'><Check className='text-green-500' />1 project per month</p>
                    </div>
                    <button className='btn w-full text-xl font-bold rounded-3xl linear-bg text-white'>Get Started Free</button>
                </div>

                <div className='relative hover:-translate-y-2 transition duration-200 linear-bg shadow-xl rounded-xl space-y-2 p-7 flex flex-col justify-between scale-105'>
                    <div className='absolute -top-4 left-1/2 -translate-x-1/2 badge badge-soft badge-warning'>Most Popular</div>
                    <div>
                        <h1 className='font-bold text-2xl text-white'>Pro</h1>
                        <p className='text-gray-200'>Best for professionals</p>
                    </div>

                    <h1 className='text-gray-200'><span className='font-bold text-white text-2xl'>$29</span>/month</h1>

                    <div>
                        <p className='flex gap-2 text-zinc-200'><Check className='text-green-500' />Access to all premium tools</p>
                        <p className='flex gap-2 text-zinc-200'><Check className='text-green-500' />Unlimited templates</p>
                        <p className='flex gap-2 text-zinc-200'><Check className='text-green-500' />Unlimited Projects</p>
                        <p className='flex gap-2 text-zinc-200'><Check className='text-green-500' />Cloud sync</p>
                        <p className='flex gap-2 text-zinc-200'><Check className='text-green-500' />Priority support</p>
                        <p className='flex gap-2 text-zinc-200'><Check className='text-green-500' />Advanced analytics</p>
                    </div>
                    <button className='btn w-full text-xl font-bold rounded-3xl bg-white'><p className=' bg-linear-to-r from-[#5f2ee6] to-[#a55be6] bg-clip-text text-transparent'>Start Pro Trial</p></button>
                </div>

                <div className='bg-gray-100 hover:shadow-xl  hover:translate-x-2 transition duration-200 rounded-xl space-y-2 p-7 flex flex-col justify-between'>
                    <div>
                        <h1 className='font-bold text-2xl'>Enterprise</h1>
                        <p className='text-zinc-500'>For teams and businesses</p>
                    </div>

                    <h1 className='text-zinc-500'><span className='font-bold text-black text-2xl'>$99</span>/month</h1>

                    <div>
                        <p className='flex gap-2 text-zinc-500'><Check className='text-green-500' />Everything in Pro</p>
                        <p className='flex gap-2 text-zinc-500'><Check className='text-green-500' />Team collaboration</p>
                        <p className='flex gap-2 text-zinc-500'><Check className='text-green-500' />Custom integrations</p>
                        <p className='flex gap-2 text-zinc-500'><Check className='text-green-500' />SLA guarantee</p>
                        <p className='flex gap-2 text-zinc-500'><Check className='text-green-500' />Dedicated support</p>
                        <p className='flex gap-2 text-zinc-500'><Check className='text-green-500' />Custom branding</p>
                    </div>
                    <button className='btn w-full text-xl font-bold rounded-3xl linear-bg text-white'>Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;