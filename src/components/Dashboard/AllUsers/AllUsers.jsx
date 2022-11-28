import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://old-bazaar-server.vercel.app/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    //for user delete function rechieve id 
    const handleUserDelete = user => {
        fetch(`https://old-bazaar-server.vercel.app/users/${user?._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${user?.name} is deleted successfully`)
                    refetch();
                }
            })
            .catch(err => {
                toast.error('delete error', err.message)
            })
    }

    // give super power for special person so be care full
    const handleUserMakeAdmin = user => {
        console.log(user._id);
        fetch(`https://old-bazaar-server.vercel.app/users/admin/${user?._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Pomotion successfull of ${user?.name}`)
                    refetch();
                }
            })
            .catch(err => {
                toast.error('update error', err.message)
            })
    }
    return (
        <div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
            <table class="min-w-full divide-y divide-gray-200 text-sm">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left">
                            <label class="sr-only" for="SelectAll">Select All</label>

                            <input
                                class="h-5 w-5 rounded border-gray-200"
                                type="checkbox"
                                id="SelectAll"
                            />
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div class="flex items-center gap-2">
                                ID

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div class="flex items-center gap-2">
                                Name

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div class="flex items-center gap-2">
                                Email

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div class="flex items-center gap-2">
                                Seller

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div class="flex items-center gap-2">
                                Buyer

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div class="flex items-center gap-2">
                                Role Action

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 text-gray-700"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </th>
                        <th
                            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Status
                        </th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                    {
                        users.length > 0 &&
                        users.map((user, i) => <tr key={user._id}>
                            <td class="sticky inset-y-0 left-0 bg-white px-4 py-2">
                                <label class="sr-only" for="Row1">Row 1</label>

                                <input
                                    class="h-5 w-5 rounded border-gray-200"
                                    type="checkbox"
                                    id="Row1"
                                />
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {i + 1}
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                {user?.name}
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">{user?.email}</td>
                            <td class="whitespace-nowrap px-4 py-2 bg-green-500 text-slate-100 font-bold text-lg">{user?.role === 'Seller' && user?.role}</td>
                            <td class="whitespace-nowrap px-4 py-2 bg-orange-400 text-slate-100 font-bold text-lg">{user?.role === 'Buyer' && user?.role}</td>
                            {
                                user?.role !== 'admin' ? <td class="whitespace-nowrap px-4 py-2">
                                    <button onClick={() => handleUserMakeAdmin(user)}
                                        class="inline-block rounded bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"

                                    >
                                        Make Admin
                                    </button>
                                </td> : <td></td>
                            }
                            <td class="whitespace-nowrap px-4 py-2">
                                <button onClick={() => handleUserDelete(user)}
                                    class="inline-block rounded bg-red-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"

                                >
                                    Delete
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default AllUsers;