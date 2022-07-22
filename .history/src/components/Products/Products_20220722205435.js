import React from 'react';
import { useSelector } from 'react-redux/es/exports';
const Products = () => {
    const productState = useSelector((state) => state)
    console.log(productState)
    return (
        <div>
            <h2 className='text-slate-800 font-semibold'>this is product page</h2>
            
        </div>
    );
};

export default Products;