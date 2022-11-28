import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesProductItem = ({ category }) => {
    const { title, resalePirce, picture, _id, originalPirce, sellerName, location, postTime, status } = category;
    return (
        <div>
            <Link to={`/details/${_id}`} className="relative block border border-gray-300 rounded-md p-5">
                <button
                    type="button"
                    className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
                >
                    <span className="sr-only">Wishlist</span>
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                    </svg>
                </button>

                <img
                    alt="Toy"
                    src={picture}
                    className="h-56 w-full object-contain lg:h-72"
                />

                <div className="p-6">

                    <div className='flex'>
                        <div>
                            <h3 className="mt-4 text-lg font-bold">{title}</h3>
                            <p className="mt-2 text-sm text-gray-700">ResalePrice: ${resalePirce}</p>
                            <p className="mt-2 text-sm text-gray-700">OriginalPrice: ${originalPirce}</p>
                        </div>
                        <div className='ml-3'>
                            <h3 className="mt-4 text-md font-bold">SellerName: {sellerName}</h3>
                            <p className="mt-2 text-sm text-gray-700">Location: {location}</p>
                            <p className="mt-2 text-sm text-gray-700">Date: {postTime}</p>
                        </div>
                    </div>



                    <button
                        type="button"
                        className="mt-4 hover:rounded-full duration-500 block w-full rounded-sm bg-secondary text-white p-4 text-sm font-medium"
                    >
                        View Details
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default CategoriesProductItem;