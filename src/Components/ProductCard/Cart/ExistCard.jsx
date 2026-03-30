import React from 'react';
import { toast } from 'react-toastify';

const ExistCard = ({ allCart, setAllCart }) => {

    const handleDelete = (id, name) => {
        const newCart = allCart.filter(cartId => cartId.id !== id)
        toast.warning(`${name} Is Deleted`)
        setAllCart(newCart)

    }
    const newPrice = allCart.reduce((sum, item) => {return sum + item.price }, 0)
    const ProceedCheckout =()=>{
        toast.success('Payment Success')
        setAllCart([])
    }
    return (
        <div className='space-y-3'>
            {
                allCart.map(cart => {
                    return (
                        <div key={cart.id} className='flex items-center justify-between border border-gray-200 bg-zinc-100 rounded-2xl p-5'>
                            <div className='flex items-center gap-5'>
                                <div className='w-15 h-15 bg-white rounded-full flex items-center justify-center'><img className='w-10 h-10' src={cart.icon} alt={cart.name} /></div>
                                <div>
                                    <h1 className='text-2xl max-md:text-sm font-bold'>{cart.name}</h1>
                                    <h2 className='font-bold text-xl max-md:text-sm'>${cart.price}</h2>
                                </div>
                            </div>
                            <button onClick={() => handleDelete(cart.id, cart.name)} className='btn btn-ghost text-red-500'>Remove</button>
                        </div>
                    )
                })
            }

            <div className='space-y-3 p-5'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold text-2xl'>Total</h1>
                    <h2 className='font-semibold text-2xl'>${newPrice}</h2>
                </div>

                <button onClick={ProceedCheckout} className='btn linear-bg w-full text-white text-xl rounded-3xl py-7' >Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default ExistCard;