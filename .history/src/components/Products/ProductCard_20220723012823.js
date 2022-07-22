import React from 'react';
import {ShoppingCartIcon} from '@heroicons/react/outline';
const ProductCard = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-neutral">Add To Cart <ShoppingCartIcon className="w-7" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;