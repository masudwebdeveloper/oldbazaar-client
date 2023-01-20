import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaEye, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdvertisePage = () => {
  const { data: adveritse = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertise", {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <section className="bg-white">
      <div class="mx-auto max-w-[1350px] px-4 py-8 z-30">
        <div className="mb-14">
          <span className="inline-block h-1 w-12 bg-[#8C71DB]"></span>
          <h2 className="mt-1 text-md font-extrabold tracking-wide md:text-md text-[#8C71DB] flex items-center gap-x-3">
            <span className="w-8 h-8 border-4 border-violet-700 shadow-inner shadow-slate-50 flex items-center justify-center bg-[#8C71DB] rounded-full">
              <FaShoppingBasket className="inline-block text-red-50 animate-pulse"></FaShoppingBasket>
            </span>
            This Week's
          </h2>
          <h1 className="my-5 text-2xl lg:text-5xl font-extrabold tracking-wide text-gray-900">
            New Arrivals
          </h1>
        </div>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          {adveritse.map((product) => (
            <a href="##" class="relative block border border-gray-100 p-2">
              <div className="group flex items-center justify-center w-64 lg:w-72 mx-auto bg-[#F6F7FB] h-64 lg:h-72 rounded-full border hover:border-double hover:border-gray-400 duration-500">
                <img
                  alt="Toy"
                  src={product.picture}
                  class="h-56 w-56 object-contain group-hover:scale-105 duration-300 transition-all"
                />
              </div>

              <button
                type="button"
                class="absolute right-2 top-2 rounded-full bg-blue-500 flex items-center justify-center text-blue-50 border-2 w-10 h-10"
              >
                <span class="sr-only">verify icon</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </button>

              <div class="p-3">
                <h3 class="my-2 text-2xl font-extrabold">{product.title}</h3>
                <p class="text-lg font-bold text-gray-700">
                  Resale Price: {product.resalePirce} $
                </p>
                <p class="text-lg line-through font-bold text-gray-300">
                  Original Price: {product.originalPirce} $
                </p>

                <div className="flex items-center justify-center gap-x-2 md:gap-x-4 mt-5">
                  <Link
                    type="button"
                    to={`/details/${product.productId}`}
                    class="group hover:scale-110 duration-300 rounded-full shadow-2xl shadow-pink-500 bg-white flex items-center justify-center text-black w-10 h-10 border-2"
                  >
                    <button
                      class="text-sm hover:rounded-full duration-500 font-medium"
                    >
                      <FaEye className=""></FaEye>
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-md bg-[#FF497C] text-white px-4 md:px-5 py-3 hover:scale-110 duration-300"
                  >
                    <Link
                      to={`/details/${product.productId}`}
                      className="text-md hover:rounded-full duration-500 font-bold"
                    >
                      See Details
                    </Link>

                    <svg
                      class="ml-1.5 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="rounded-full hover:scale-110 duration-300 bg-white flex items-center justify-center text-black border-2 w-10 h-10"
                  >
                    <span class="sr-only">Wishlist</span>
                    <svg
                      class="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>
                </div>

              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisePage;
