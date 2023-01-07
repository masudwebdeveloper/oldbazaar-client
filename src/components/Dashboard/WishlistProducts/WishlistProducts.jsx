import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const WishlistProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: wishlists = [] } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/wishlist?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200 text-sm">
        <thead class="bg-gray-100">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Name
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Photo
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Use Of year
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              resale Price
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Original Price
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Buy
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          {wishlists.length > 0 &&
            wishlists.map((wishlist, i) => (
              <tr key={wishlist._id}>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {wishlist.title}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <PhotoProvider>
                        <PhotoView src={wishlist.picture}>
                          <img
                            src={wishlist.picture}
                            alt="Tailwind-CSS-Avatar-component"
                          />
                        </PhotoView>
                      </PhotoProvider>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  <strong>{wishlist.yearOfUse}</strong>
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  <strong>{wishlist?.resalePirce} $</strong>
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  <strong>{wishlist?.originalPirce} $</strong>
                </td>
                {wishlist?.resalePirce && !wishlist.paid && (
                  <Link to="">
                    <td class="whitespace-nowrap px-4 pt-5 text-gray-700">
                      <button className="btn btn-sm btn-secondary btn-disabled">
                        Pay Now
                      </button>
                    </td>
                  </Link>
                )}
                {wishlist?.price && wishlist.paid && (
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    <button className="btn btn-sm btn-success" disabled>
                      Paid
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishlistProducts;
