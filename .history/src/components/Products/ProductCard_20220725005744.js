import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
const ProductCard = () => {
    const productState = useSelector((state) => state.setProdReducer.products)
    console.log(productState)
    return (
        <div className='max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 place-content-center'>
            {
                productState.map(product => <div class="card card-compact w-96  bg-base-100 shadow-xl p-2 ">
                    <figure><img src={product.image} alt="product-img" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-semibold text-2xl">{product.title}</h2>
                        <p className='text-xl'>{product.desc}</p>
                        <p className='text-lg font-semibold text-neutral'>Price : $ {product.price}</p>
                        <div class="card-actions justify-end">
                            <Link to={`/products/${product.id}`} class="btn btn-neutral">Show Details</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ProductCard;