import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
const Products = () => {
    const productState = useSelector((state) => state)
    console.log(productState)
    useEffect(() => {
        const productUrl = 'product.json';
        fetch(productUrl)
            .then(response => response.json())
            .then(data => productState(data))
    }, [])
    return (
        <div>
            <h2 className='text-slate-800 font-semibold'>this is product page</h2>
        </div>
    );
};

export default Products;