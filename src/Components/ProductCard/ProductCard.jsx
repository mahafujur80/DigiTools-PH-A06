import React, { use, useState } from 'react';
import Products from './Products/Products';
import Cart from './Cart/Cart';

const ProductCard = ({ DataPromises, allCart, setAllCart }) => {
    const productData = use(DataPromises)

    const [activeSection, setActiveSection] = useState('products')
    return (
        <div className='max-w-[1100px] max-sm:w-[90%] mx-auto pb-20'>
            <div className='text-center w-[60%] mx-auto space-y-2'>
                <h2 className='font-bold text-5xl max-md:text-2xl'>Premium Digital Tools</h2>
                <p className='text-zinc-500 max-md:text-xs'>Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs flex justify-center gap-1 mx-auto my-10">
                <button onClick={() => setActiveSection('products')} className={`btn rounded-3xl ${activeSection === 'products' ? 'linear-bg text-white' : ''}`} >Products</button>
                <button onClick={() => setActiveSection('cart')} className={`btn rounded-3xl ${activeSection === 'cart' ? 'linear-bg text-white' : ''}`}>Cart ({allCart.length}) </button>
            </div>

            {
                activeSection === 'products' ? <Products productData={productData} allCart={allCart} setAllCart={setAllCart} /> : <Cart allCart={allCart} setAllCart={setAllCart} />
            }

        </div>
    );
};

export default ProductCard;