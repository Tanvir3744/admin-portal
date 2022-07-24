import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
const ProductDetail = () => {
    const productId = useParams()
    console.log(productid)
    return (
        <div>
            <h2>this is the detail page</h2>
        </div>
    );
};

export default ProductDetail;