import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import './SecondHandProducts.css';
import { format } from 'date-fns';

const SecondHandProducts = () => {
    const [secondProducts, setSecondProducts] = useState([]);
    const [size, setSize] = useState(8);
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0);

    const date = new Date();
    const today = format(date, 'PP');

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    const pages = Math.ceil(count / size);
    useEffect(() => {
        fetch(`http://localhost:5000/products?size=${size}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setSecondProducts(data.products)
                setCount(data.count);
            })
    }, [page, size])

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
                    <div className="mx-auto max-w-screen-xl px-4 py-8">
                        <div>
                            <span className="inline-block h-1 w-12 bg-red-700"></span>

                            <h2
                                className="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl"
                            >
                                Phone Finder
                            </h2>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">

                            {
                                secondProducts.map(singleProduct => !singleProduct.paid && <Link
                                    to={`/details/${singleProduct._id}`}
                                    className="block shadow-2xl rounded-lg"
                                    key={singleProduct._id}
                                >
                                    {singleProduct.postTime === today &&
                                        <div className="flex justify-center">
                                            <strong
                                                className="relative h-6 bg-red-600 px-4 text-xs uppercase leading-6 text-white"
                                            >
                                                New
                                            </strong>
                                        </div>
                                    }

                                    <img
                                        alt="Trainer"
                                        src={singleProduct?.picture}
                                        className="-mt-3 h-96 w-full object-cover p-3"
                                    />

                                    <h3 className="mt-1 ml-3 font-bold text-sm text-black/90">
                                        {singleProduct.title}
                                    </h3>

                                    <div className="mt-4 flex items-center justify-between font-bold px-3">
                                        <p className="text-lg">${singleProduct?.resalePirce}</p>

                                        <p className="text-xs uppercase tracking-wide">{singleProduct?.status}</p>
                                    </div>
                                    <div className='flex'>

                                        <div className='ml-3'>
                                            <h3 className="mt-4 text-md font-bold">SellerName: {singleProduct?.sellerName}</h3>
                                            <p className="mt-2 text-sm text-gray-700">Location: {singleProduct?.location}</p>
                                            <p className="mt-2 text-sm text-gray-700">Date: {singleProduct?.postTime}</p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="mt-4 block w-full hover:rounded-full duration-500 rounded-lg bg-warning text-white p-4 text-sm font-medium"
                                    >
                                        View Details
                                    </button>
                                </Link>)
                            }

                        </div>
                    </div>
                </section>

            </div>
            <div className='pagination text-center mt-10'>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={Number}
                        className={page === number ? 'btn btn-md btn-warning' : 'btn btn-sm'}
                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button>)
                }
            </div>

        </section>
    );
};

export default SecondHandProducts;