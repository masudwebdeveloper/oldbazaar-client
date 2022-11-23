import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const SecondHandProducts = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    const { data: secondProducts = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='mx-auto max-w-screen-xl px-4 py-8'>
            <div>
                <div className='flex flex-col lg:flex-row justify-between bg-slate-200 p-5'>

                    {
                        categories.map(category => <Link
                            className='btn btn-ghost'
                            to={`/categories/${category._id}`}
                            key={category._id}
                        >{category.category}</Link>)
                    }
                </div>
            </div>
            <div>
                <section>
                    <div class="mx-auto max-w-screen-xl px-4 py-8">
                        <div>
                            <span class="inline-block h-1 w-12 bg-red-700"></span>

                            <h2
                                class="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl"
                            >
                                Trainers
                            </h2>
                        </div>

                        <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">

                            {
                                secondProducts.map(singleProduct => <Link
                                    to={`/details/${singleProduct._id}`}
                                    class="block shadow-2xl rounded-lg"
                                    key={singleProduct._id}
                                >
                                    <div class="flex justify-center">
                                        <strong
                                            class="relative h-6 bg-red-600 px-4 text-xs uppercase leading-6 text-white"
                                        >
                                            New
                                        </strong>
                                    </div>

                                    <img
                                        alt="Trainer"
                                        src={singleProduct?.picture}
                                        class="-mt-3 h-96 w-full object-cover p-3"
                                    />

                                    <h3 class="mt-4 ml-3 font-bold text-sm text-black/90">
                                        {singleProduct.title}
                                    </h3>

                                    <div class="mt-4 flex items-center justify-between font-bold p-3">
                                        <p class="text-lg">${singleProduct?.resalePirce}</p>

                                        <p class="text-xs uppercase tracking-wide">6 Colors</p>
                                    </div>
                                </Link>)
                            }

                        </div>
                    </div>
                </section>

            </div>

        </section>
    );
};

export default SecondHandProducts;