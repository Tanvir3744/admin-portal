import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setProductsAction } from "../../Redux/Actions/Action"
const Products = () => {
    const productState = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProductApi = async () => {
        const response =await axios
            .get('product.json')
            .catch(err => {
                console.log('err', err)
            })
        console.log(response.data)
    }

    useEffect(() => {
        fetchProductApi()
    },[])
    return (
        <div>
            <h2 className='text-slate-800 font-semibold'>this is product page</h2>
        </div>
    );
};

export default Products;