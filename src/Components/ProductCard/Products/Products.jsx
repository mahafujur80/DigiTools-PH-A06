import Card from './Card';

const Products = ({ productData, allCart, setAllCart }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                productData.map(data => <Card key={data.id} data={data} allCart={allCart} setAllCart={setAllCart} />)
            }
        </div >
    );
};

export default Products;