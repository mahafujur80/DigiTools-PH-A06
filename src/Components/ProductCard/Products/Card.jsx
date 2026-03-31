import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { toast } from 'react-toastify';

const Card = ({ data, allCart, setAllCart }) => {

    const [selected, setSelected] = useState(false)

    const handleBuyButton = () => {
        const exist = allCart.some(item => item.id === data.id)
        if (exist) {
            toast.error('Already In Cart');
            return;
        }
        toast.success(`${data.name} Is Add To Cart`)
        setSelected(true)
        setAllCart([...allCart, data])
    }

    return (
        <div className=' shadow-sm hover:shadow-xl border border-gray-300 p-4 space-y-2 rounded-xl  hover:-translate-y-2 active:scale-95 transition duration-300'>
            <div className='flex items-center justify-end'>
                <p className={`text-sm badge badge-soft ${data.tag === 'new' ? 'badge-success' : 'badge-primary'} ${data.tag === 'best seller' ? "badge-warning" : ''}`}>{data.tag.toUpperCase()}</p>
            </div>
            <div className=''>
                <div className='w-15 h-15  rounded-full border border-gray-300 flex items-center justify-center'>
                    <div><img className='w-10 h-10 object-cover' src={data.icon} alt="" /></div>
                </div>
            </div>
            <div className='space-y-2'>
                <h1 className='text-xl font-bold'>{data.name}</h1>
                <p className='text-zinc-500'>{data.description}</p>
                <h2><span className='font-bold text-xl'>${data.price} </span><span className='text-zinc-500'>/{data.period}</span></h2>
            </div>
            <div>
                {
                    data.features.map((list, index) => <p key={index} className='flex items-center gap-2 text-zinc-500'><Check className='text-green-500' /> {list}</p>)
                }
            </div>

            <button onClick={handleBuyButton} className='btn mt-5 w-full rounded-3xl text-white  font-semibold linear-bg'>{selected ? 'Added to cart' : 'Buy Now'}</button>
        </div>
    );
};

export default Card;