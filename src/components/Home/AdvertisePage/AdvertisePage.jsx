import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdvertisePage = () => {
    const { data: adveritse = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise')
            const data = await res.json();
            return data
        }
    })
    return (
        <section className='mt-10'>
            <div class="mx-auto max-w-screen-xl px-4 py-8">
                <div class="relative mx-auto max-w-3xl text-center">
                    <span
                        class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10"
                    ></span>

                    <h2
                        class="relative inline-block bg-white px-4 text-center text-2xl font-bold"
                    >

                    </h2>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-4">

                    {
                        adveritse.map(product => <a href="#" class="relative block border border-gray-100">
                            <button
                                type="button"
                                class="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
                            >
                                <span class="sr-only">Wishlist</span>
                                <svg
                                    class="h-4 w-4"
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
                                src={product.picture}
                                class="h-56 w-full object-contain"
                            />

                            <div class="p-6">
                                <p class="text-sm font-medium text-gray-600">$14.99</p>

                                <h3 class="mt-1 text-lg font-bold">Robot Toy</h3>

                                <button
                                    type="button"
                                    class="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4"
                                >
                                    <span class="text-sm font-medium"> Add to Cart </span>

                                    <svg
                                        class="ml-1.5 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </a>)
                    }
                </div>

                <div class="mt-4 text-center">
                    <button type="button" class="text-xs text-gray-500 underline">
                        Clear Recently Viewed
                    </button>
                </div>
            </div>
        </section>



    );
};

export default AdvertisePage;