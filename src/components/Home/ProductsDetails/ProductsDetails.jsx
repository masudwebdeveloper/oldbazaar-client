import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const ProductsDetails = () => {
    const product = useLoaderData();
    const { title, resalePirce, originalPirce, sellerName, picture, yearOfUse, postTime, location, description } = product;

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

                                <button
                                    type="button"
                                    class="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                                >
                                    Notify when on sale
                                </button>
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