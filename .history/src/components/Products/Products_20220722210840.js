import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {setProductsAction} from "../../Redux/Actions/Action"
const Products = () => {
    const productState = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log(productState)
    useEffect(() => {
        const productUrl = 'product.json';
        fetch(productUrl)
            .then(response => response.json())
            .then(data => dispatch((data))
    }, [])
    return (
        <div>
            <h2 className='text-slate-800 font-semibold'>this is product page</h2>
        </div>
    );
};

export default Products;