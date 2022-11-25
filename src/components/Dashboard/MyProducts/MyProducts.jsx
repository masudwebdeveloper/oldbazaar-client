import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = product =>{
        fetch(`http://localhost:5000/myproducts/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                toast.success('My Product deleted Successfull')
                refetch()
            }
            console.log();
        })
        .catch(err => console.error('my product deleted error', err));
    }

    const handleAdvertise = product =>{
        const advertiseProductData = {
            ...product,
            productId: product._id,
            email: user?.email || 'unauthorization',

        }
        delete advertiseProductData._id
        fetch('http://localhost:5000/adveritse',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(advertiseProductData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Your Product Advertise is Running Pay for Advertise')
            }
            console.log(data);
        })
        .catch(err => {
            console.error('advertise post error', err);
        })
    }
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {
                products.map(product => <div
                    class="block rounded-lg p-4 shadow-xl shadow-indigo-100"
                    key={product._id}
                >
                    <PhotoProvider>
                        <PhotoView src={product.picture}>
                            <img
                                alt="Home"
                                src={product.picture}
                                class="h-64 w-3/5 mx-auto rounded-md"
                            />
                        </PhotoView>
                    </PhotoProvider>

                    <div class="mt-2">
                        <dl>
                            <div>
                                <dt class="sr-only">Price</dt>

                                <dd class="text-sm text-gray-500">${product.resalePirce}</dd>
                            </div>

                            <div>
                                <dt class="sr-only">Address</dt>

                                <dd class="font-medium">{product.title}</dd>
                            </div>
                        </dl>

                        <div class="mt-6 grid grid-cols-2 gap-8 text-xs">
                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p class="text-gray-500">{product.postTime}</p>
                                    <p class="font-medium">use of year: {product.yearOfUse}</p>
                                </div>
                            </div>

                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p class="text-gray-500">SellerName: {product.sellerName}</p>

                                    <p class="font-medium">Location: {product.location}</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 grid grid-cols-2 gap-8'>
                            <button onClick={()=>handleDelete(product)} className='btn btn-sm btn-error text-white'>delete</button>
                            <button onClick={()=> handleAdvertise(product)} className='btn btn-sm btn-primary text-white'>Advertise</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    )
};

export default MyProducts;