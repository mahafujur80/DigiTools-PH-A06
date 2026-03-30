import React from 'react';
import EmptyError from './EmptyError';
import ExistCard from './ExistCard';

const Cart = ({allCart, setAllCart}) => {
    return (
        <div className='max-w-[1100px] max-md:w-[90%]' >
            <h1 className='text-3xl font-bold my-5'>Your Cart 🛒</h1>
            {
                allCart.length === 0 ? <EmptyError/> : <ExistCard allCart={allCart} setAllCart={setAllCart}/>
            }
        </div>
    );
};

export default Cart;