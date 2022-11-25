import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const {user} = useContext(AuthContext);
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    const date = new Date();
    const today = format(date, "PP")

    //for navigate add product to home page
    const navigate = useNavigate()
    const handleAddToProduct = data => {
        setIsLoading(true)
        const sellerName = data.sellerName;
        const location = data.location;
        const resalePrice = data.resalePrice;
        const originalPrice = data.originalPrice;
        const title = data.title;
        const category = data.category;
        const useOfYears = data.useOfYears;
        const description = data.description;
        //for get image
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image)

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageData => {
            if(imageData.success){
                const picture = imageData.data.url;
                console.log(picture);
                const productData = {
                    sellerName,
                    location,
                    resalePirce: resalePrice,
                    originalPirce: originalPrice,
                    title,
                    category,
                    yearOfUse: useOfYears,
                    picture,
                    postTime: today,
                    email: user?.email,
                    rating: 5,
                    description
                }
                fetch('http://localhost:5000/products',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(productData)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        navigate('/')
                        setIsLoading(false);
                    }
                })
                .catch(err=>{
                    console.error('add product error', err);
                })
            }
        })
        .catch(err =>{
            console.error("imgbb err", err);
        })

    }
    return (
        <section class="bg-gray-100">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 lg:py-12">
                        <p class="max-w-xl text-lg">
                            At the same time, the fact that we are wholly owned and totally
                            independent from manufacturer and other group control gives you
                            confidence that we will only recommend what is right for you.
                        </p>

                        <div class="mt-8">
                            <a href="" class="text-2xl font-bold text-pink-600">
                                0151 475 4450
                            </a>

                            <address class="mt-2 not-italic">
                                282 Kevin Brook, Imogeneborough, CA 58517
                            </address>
                        </div>
                    </div>

                    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form onSubmit={handleSubmit(handleAddToProduct)} class="space-y-4">
                            <div>
                                <label class="sr-only" for="name">Add To Product</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Seller Name"
                                    type="text"
                                    id="name"
                                    {...register('sellerName', { required: true })}
                                />
                                {errors.sellerName && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="email">Title</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Phone name"
                                        type="text"
                                        id="title"
                                        {...register('title', { required: true })}
                                    />
                                    {errors.title && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div>
                                    <label class="sr-only" for="email">Location</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Location"
                                        type="text"
                                        id="location"
                                        {...register('location', { required: true })}
                                    />
                                    {errors.location && <span className='text-red-500'>This field is required</span>}
                                </div>

                                <div>
                                    <label class="sr-only" for="phone">Resale Price</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Resale Price"
                                        type="number"
                                        id="resalePrice"
                                        {...register('resalePrice', { required: true })}
                                    />
                                    {errors.resalePrice && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div>
                                    <label class="sr-only" for="phone">Original Price</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Original Price"
                                        type="number"
                                        id="originalPrice"
                                        {...register('originalPrice', { required: true })}
                                    />
                                    {errors.originalPrice && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div>
                                    <label class="sr-only" for="phone">Use of Years</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Use of years"
                                        type="number"
                                        id="useOfYears"
                                        {...register('useOfYears', { required: true })}
                                    />
                                    {errors.useOfYears && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="sr-only"
                                    >
                                        What is product category
                                    </label>

                                    <select
                                        name="category"
                                        className="select select-bordered w-full max-w-xs"
                                        {...register('category', { required: true })}
                                    >
                                        <option disabled selected>What is Category?</option>

                                        {
                                            categories.map(category => <option key={category._id} value={category.category}>{category.category}</option>)
                                        }
                                    </select>
                                    {errors.category && <span className='text-red-600'>This field is required</span>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="image" className='sr-only'>Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    className="file-input file-input-bordered w-full max-w-xs"
                                    {...register('image', { required: true })}
                                />
                                {errors.category && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div>
                                <label class="sr-only" for="description">Descripetion</label>
                                <textarea
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Details for phone type now"
                                    rows="8"
                                    id="discription"
                                    {...register('description', { required: true })}
                                ></textarea>
                                {errors.description && <span className='text-red-600'>This field is required</span>}
                            </div>

                            <div class="mt-4">
                                <button
                                    type="submit"
                                    class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                                >
                                    <span class="font-medium">{
                                        isLoading ? 'Loading...' : 'Add Product'
                                    }</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ml-3 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddProduct;