import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setProductsAction } from "../../Redux/Actions/Action"
import ProductCard from './ProductCard';
const Products = () => {
    const productState = useSelector((state) => state)
    const {name, title, desc } = productState;
    const dispatch = useDispatch()


    const fetchProductApi = async () => {
        const response = await axios
            .get('product.json')
            .catch(err => {
                console.log('err', err)
            })
        dispatch(setProductsAction(response.data))
    }

    //fetch products from the server then called inside from useEffect hooks
    useEffect(() => {
        fetchProductApi()
    }, [])

    console.log('products',productState)
    return (
        <div>
            <h2 className='text-slate-800 font-semibold'>this is product page</h2>
            <ProductCard />
        </div>
    );
};

export default Products;