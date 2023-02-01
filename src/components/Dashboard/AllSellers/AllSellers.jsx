import React, { useEffect, useState } from "react";
import axios from "axios";

const AllSellers = () => {
  const [allSellers, setSellers] = useState([]);
  useEffect(() => {
    axios
      .get("https://old-bazaar-server.vercel.app/allsellers")
      .then((data) => {
        setSellers(data.data);
      });
  }, []);
  return (
    <div>
      <div class="overflow-x-auto mt-5 lg:mx-10">
        <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th class="bg-teal-300 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Name
              </th>
              <th class="bg-teal-400 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Email
              </th>
              <th class="bg-teal-500 whitespace-nowrap px-4 py-2 text-left font-bold text-black">
                Role
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {allSellers.length &&
              allSellers.map((buyer) => (
                <tr>
                  <td class="whitespace-nowrap px-4 py-2 font-semibold text-lg text-slate-100 bg-slate-500">
                    {buyer?.name}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-100 text-lg bg-slate-600">
                    {buyer?.email}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-100 text-lg bg-slate-700">
                    {buyer?.role}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
