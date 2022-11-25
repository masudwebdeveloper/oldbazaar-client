import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ReportsProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: reports = [] } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/report`);
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
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><button className='btn btn-error hover:animate-pulse'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportsProducts;