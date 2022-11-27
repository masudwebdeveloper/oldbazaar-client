import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const bookingProduct = useLoaderData();
    return (
        <section>
            <h1 class="sr-only">Checkout form</h1>

            <div class="relative mx-auto max-w-screen-2xl">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="bg-gray-50 py-12 md:py-24">
                        <div class="mx-auto max-w-lg px-4 lg:px-8">
                            <div class="flex items-center">
                                <span class="h-10 w-10 rounded-full bg-blue-900"></span>

                                <h2 class="ml-4 font-medium">{bookingProduct.productName}</h2>
                            </div>
                            <div class="mt-12">
                                <div class="flow-root">
                                    <ul class="-my-4 divide-y divide-gray-200">
                                        <li class="flex items-center justify-between py-4">
                                            <div class="flex items-start">
                                                <img
                                                    alt="Trainer"
                                                    src={bookingProduct.picture}
                                                    class="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                                                />

                                                <div class="ml-4">
                                                    <p class="text-sm">Buyer: {bookingProduct.buyerName}</p>

                                                    <dl class="mt-1 space-y-1 text-xs text-gray-500">
                                                        <div>
                                                            <dt class="inline">Booking Date: {bookingProduct.bookingDate}</dt>
                                                        </div>

                                                        <div>
                                                            <dt class="inline">Seller: {bookingProduct.sellerName}</dt>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>

                                            <div>
                                                <p class="text-sm">
                                                    <strong>
                                                        ${bookingProduct.price}
                                                    </strong>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white py-12 md:py-24">
                        <div class="mx-auto max-w-lg px-4 lg:px-8">
                            <form class="grid grid-cols-6 gap-4">
                                <div class="col-span-3">
                                    <label class="mb-1 block text-sm text-gray-600" for="first_name">
                                        First Name
                                    </label>

                                    <input
                                        class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="text"
                                        id="first_name"
                                        name='firstName'
                                    />
                                </div>

                                <div class="col-span-3">
                                    <label class="mb-1 block text-sm text-gray-600" for="last_name">
                                        Last Name
                                    </label>

                                    <input
                                        class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="text"
                                        id="last_name"
                                        name='lastName'
                                    />
                                </div>

                                <div class="col-span-6">
                                    <label class="mb-1 block text-sm text-gray-600" for="email">
                                        Email
                                    </label>

                                    <input
                                        class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="email"
                                        id="email"
                                        name='email'
                                        defaultValue={bookingProduct.email}
                                    />
                                </div>

                                <div class="col-span-6">
                                    <label class="mb-1 block text-sm text-gray-600" for="phone">
                                        Phone
                                    </label>

                                    <input
                                        class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="tel"
                                        id="phone"
                                        name='phone'
                                        defaultValue={bookingProduct.phone}
                                    />
                                </div>

                                <fieldset class="col-span-6">
                                    <legend class="mb-1 block text-sm text-gray-600">
                                        Card Details
                                    </legend>

                                    <div class="-space-y-px rounded-lg bg-white shadow-sm">
                                        <div>
                                            <label class="sr-only" for="card-number">Card Number</label>

                                            <input
                                                class="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                type="text"
                                                name="card-number"
                                                id="card-number"
                                                placeholder="Card number"
                                            />
                                        </div>

                                        <div class="flex -space-x-px">
                                            <div class="flex-1">
                                                <label class="sr-only" for="card-expiration-date">
                                                    Expiration Date
                                                </label>

                                                <input
                                                    class="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                    type="text"
                                                    name="card-expiration-date"
                                                    id="card-expiration-date"
                                                    placeholder="MM / YY"
                                                />
                                            </div>

                                            <div class="flex-1">
                                                <label class="sr-only" for="card-cvc">CVC</label>

                                                <input
                                                    class="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                    type="text"
                                                    name="card-cvc"
                                                    id="card-cvc"
                                                    placeholder="CVC"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset class="col-span-6">
                                    <legend class="mb-1 block text-sm text-gray-600">
                                        Billing Address
                                    </legend>

                                    <div class="-space-y-px rounded-lg bg-white shadow-sm">
                                        <div>
                                            <label class="sr-only" for="country">Country</label>

                                            <select
                                                class="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                                                id="country"
                                                name="country"
                                                autocomplete="country-name"
                                            >
                                                <option>England</option>
                                                <option>Wales</option>
                                                <option>Scotland</option>
                                                <option>France</option>
                                                <option>Belgium</option>
                                                <option>Japan</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label class="sr-only" for="postal-code">
                                                ZIP/Post Code
                                            </label>

                                            <input
                                                class="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autocomplete="postal-code"
                                                placeholder="ZIP/Post Code"
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="col-span-6">
                                    <button
                                        class="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                                        type="submit"
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Payment;