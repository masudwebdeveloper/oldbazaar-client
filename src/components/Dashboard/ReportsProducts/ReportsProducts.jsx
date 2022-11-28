import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ReportsProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: reports = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch(`https://old-bazaar-server.vercel.app/report`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = product => {
        const procceed = window.confirm(`Are you sure. do you want delete ${product?.title}`)
        if (procceed) {
            fetch(`https://old-bazaar-server.vercel.app/reportproduct/${product.productId}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        handleReportDelete(product._id)

                    }
                })
                .catch(err => {
                    console.error('report product deleted error', err);
                })
        }

    }

    const handleReportDelete = id => {
        console.log(id);
        fetch(`https://old-bazaar-server.vercel.app/reportproductdelete/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Reported product deleted sucessfull');
                    refetch();
                }
            })
            .catch(err => {
                console.error('hadleReport Delete error', err);
            })
    }
    return (
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 text-sm">
                <thead class="bg-gray-100">
                    <tr>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Name
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Photo
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Product Id
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Report
                        </th>

                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">


                    {
                        reports.length > 0 &&
                        reports.map((report, i) => <tr
                            key={report._id}
                        >
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {report.title}
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <PhotoProvider>
                                            <PhotoView src={report.picture}>
                                                <img src={report.picture} alt="Tailwind-CSS-Avatar-component" />
                                            </PhotoView>
                                        </PhotoProvider>
                                    </div>
                                </div>
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><strong>{report.productId}</strong></td>
                            <td class="whitespace-nowrap px-4 py-2 text-red-700 bg-gray-200 text-xl font-bold text-center"><strong>{report?.report}</strong></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><button onClick={() => handleDelete(report)} className='btn btn-error hover:animate-pulse'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportsProducts;