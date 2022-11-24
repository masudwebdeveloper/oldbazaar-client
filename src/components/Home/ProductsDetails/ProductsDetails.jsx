import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const ProductsDetails = () => {
    const product = useLoaderData();
    const { user } = useContext(AuthContext);
    const {_id, title, resalePirce, originalPirce, sellerName, picture, yearOfUse, postTime, location, description } = product;
    const wishlist = localStorage.getItem(`${_id}`)
    const handleWishlist = product => {

        const wishlistProduct = {
            ...product,
            email: user.email,
            productId: product._id
        }
        delete wishlistProduct._id;
        fetch(`http://localhost:5000/wishlist`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlistProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('This reserved for you buy soon')
                    localStorage.setItem(`${product._id}`, true)
                }
                if (!data.acknowledged) {
                    toast.error(data.message)
                }
            })
            .catch(err => {
                console.error('wishlist error', err);
            })
    }

    const handleReport = product => {
        console.log(product._id);
    }
    return (
        <div>
            <section>
                <div class="relative mx-auto max-w-screen-xl px-4 py-8">
                    <div>
                        <h1 class="text-2xl font-bold lg:text-3xl">{title}</h1>

                        <p class="mt-1 text-sm text-gray-500">year of use: {yearOfUse} year</p>
                    </div>

                    <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
                        <div class="lg:col-span-3">
                            <div class="relative mt-4">
                                <img
                                    alt="Tee"
                                    src={picture}
                                    class="h-72 w-full rounded-xl object-cover lg:h-full p-5 context"
                                />


                            </div>

                            <ul class="mt-1 flex gap-1">
                                <li>
                                    <img
                                        alt="Tee"
                                        src={picture}
                                        class="h-16 w-16 rounded-md object-cover"
                                    />
                                </li>

                                <li>
                                    <img
                                        alt="Tee"
                                        src={picture}
                                        class="h-16 w-16 rounded-md object-cover"
                                    />
                                </li>

                                <li>
                                    <img
                                        alt="Tee"
                                        src={picture}
                                        class="h-16 w-16 rounded-md object-cover"
                                    />
                                </li>

                                <li>
                                    <img
                                        alt="Tee"
                                        src={picture}
                                        class="h-16 w-16 rounded-md object-cover"
                                    />
                                </li>
                            </ul>
                        </div>

                        <div class="lg:sticky lg:top-0">
                            <form class="space-y-4 lg:pt-8">
                                <fieldset>
                                    <legend class="text-lg font-bold">SellerName: {sellerName}</legend>

                                    <div class="mt-2 flex gap-1">
                                        <label for="material_cotton" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="material_cotton"
                                                name="material"
                                                class="peer sr-only"
                                                checked
                                            />

                                            <span
                                                class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100"
                                            >
                                                Post Date: {postTime}
                                            </span>
                                        </label>

                                        <label for="material_wool" class="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="material_wool"
                                                name="material"
                                                class="peer sr-only"
                                                checked
                                            />

                                            <span
                                                class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100"
                                            >
                                                location: {location}
                                            </span>
                                        </label>
                                    </div>
                                </fieldset>

                                <div class="rounded border bg-gray-100 p-4">
                                    <p class="text-sm">
                                        <span class="block"> Pay as low as $3/mo with 0% APR. </span>

                                        <Link to="/" class="mt-1 inline-block underline"> Find out more </Link>
                                    </p>
                                </div>

                                <div>
                                    <p class="text-xl font-bold text-green-500">Resale Price: ${resalePirce}</p>
                                    <p class="text-xl font-bold">Original Price: ${originalPirce}</p>
                                </div>

                                <button
                                    type="submit"
                                    class="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                                >
                                    Buy Now
                                </button>

                                <div className='flex justify-between mt-5'>
                                    <button
                                        type="button"
                                        class={`rounded-full ${wishlist ? 'bg-red-600' : 'bg-black'} p-2 text-white animate-bounce`}
                                        title='Wishlist'
                                        onClick={() => handleWishlist(product)}
                                    >
                                        <span class="sr-only">Wishlist</span>
                                        <svg
                                            class="h-6 w-6"
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
                                    <button
                                        type="button"
                                        class={`rounded-full bg-black p-2 text-white animate-bounce`}
                                        title='Report'
                                        onClick={() => handleReport(product)}
                                    >
                                        <span class="sr-only">Report</span>


                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                                        </svg>

                                    </button>
                                </div>
                            </form>
                        </div>

                        <div class="lg:col-span-3">
                            <div
                                class="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl"
                            >
                                <p>


                                    {description}
                                </p>



                                <h2>Features</h2>

                                <ul>
                                    <li>Smooth neck design</li>
                                    <li>Breathable fabric</li>
                                    <li>Odour prevention</li>
                                    <li>Made from recycled materials</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default ProductsDetails;