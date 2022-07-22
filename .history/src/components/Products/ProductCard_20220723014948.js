import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import {useSelector} from 'react-redux'
const ProductCard = () => {
    const productState = useSelector((state) => state.setProdReducer.products)
    console.log(productState)
    return (
        <div className='max-w-7xl mx-auto '>
            {
                productState.map(product =>  <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                        <h2 class="card-title">{product.name}</h2>
                        <p>{product.desc}</p>
                        <p>{product.price}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-neutral">Add To Cart <ShoppingCartIcon className="w-7" /></button>
                    </div>
                </div>
            </div>)
           }
        </div>
    );
};

export default ProductCard;