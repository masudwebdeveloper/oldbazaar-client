import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyBookingProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: mybookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
            const data = await res.json();
            return data;
        }
    })
    return (
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 text-sm">
                <thead class="bg-gray-100">
                    <tr>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Product Name
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Photo
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Booking Date
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            resale Price
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Buyer Name
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Buy
                        </th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">


                    {
                        mybookings.length > 0 &&
                        mybookings.map((product, i) => <tr
                            key={product._id}
                        >
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {product?.productName}
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <PhotoProvider>
                                            <PhotoView src={product?.picture}>
                                                <img src={product?.picture} alt="Tailwind-CSS-Avatar-component" />
                                            </PhotoView>
                                        </PhotoProvider>
                                    </div>
                                </div>
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><strong>{product?.bookingDate}</strong></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><strong>{product?.price} $</strong></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><strong>{product?.buyerName}</strong></td>
                            {
                                product?.price && !product.paid && <Link to={`/dashboard/payment/${product._id}`}>
                                    <td class="whitespace-nowrap px-4 pt-5 text-gray-700"><button className='btn btn-sm btn-secondary'>Pay Now</button></td>
                                </Link>
                            }
                            {
                                product?.price && product.paid && <td class="whitespace-nowrap px-4 py-2 text-gray-700"><button className='btn btn-sm btn-success' disabled>Paid</button></td>
                            }
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBookingProducts;