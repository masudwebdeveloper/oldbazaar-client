import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SecondHandProducts.css";
import { format } from "date-fns";
import { FaEye, FaShoppingBasket } from "react-icons/fa";

const SecondHandProducts = () => {
  const [secondProducts, setSecondProducts] = useState([]);
  const [page, setPage] = useState(0);

  const date = new Date();
  const today = format(date, "PP");

  const newCount = secondProducts.length;
  const pages = Math.ceil(newCount / 8);

  useEffect(() => {
    fetch(
      `https://old-bazaar-server.vercel.app/products?size=${8}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSecondProducts(data.products);
      });
  }, [page]);

  return (
    <section className="mx-auto max-w-[1350px] px-4 py-8">
      <div className="mb-14">
        <span className="inline-block h-1 w-12 bg-[#8C71DB]"></span>
        <h2 className="mt-1 text-md font-extrabold tracking-wide md:text-md text-[#8C71DB] flex items-center gap-x-3">
          <span className="w-8 h-8 border-4 border-violet-700 shadow-inner shadow-slate-50 flex items-center justify-center bg-[#8C71DB] rounded-full">
            <FaShoppingBasket className="inline-block text-red-50 animate-pulse"></FaShoppingBasket>
          </span>
          Our Products
        </h2>
        <h1 className="my-4 text-2xl lg:text-5xl font-extrabold tracking-wide text-gray-900">
          Explore our Products
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {secondProducts.map((singleProduct) => (
          <Link
            // to={`/details/${singleProduct._id}`}
            className="block group relative shadow-2xl rounded-lg"
            key={singleProduct._id}
          >
            {singleProduct.postTime === today && (
              <div className="flex justify-center">
                <strong className="relative h-6 bg-red-600 px-4 text-xs uppercase leading-6 text-white">
                  New
                </strong>
              </div>
            )}

            <div className="bg-[#F6F7FB] py-5 group">
              <img
                alt="Toy"
                src={singleProduct.picture}
                className="h-56 w-full object-contain group-hover:scale-110 duration-300"
              />
            </div>

            <div className="px-2 py-5">
              <h3 className="mt-1 ml-3 font-bold text-sm text-black/90">
                {singleProduct.title}
              </h3>

              <div className="mt-4 flex items-center justify-between font-bold px-3">
                <p className="text-lg">${singleProduct?.resalePirce}</p>

                <p className="text-xs uppercase tracking-wide">
                  {singleProduct?.status}
                </p>
              </div>
              <div className="flex">
                <div className="ml-3">
                  <h3 className="mt-4 text-md font-bold">
                    SellerName: {singleProduct?.sellerName}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Location: {singleProduct?.location}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    Date: {singleProduct?.postTime}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex absolute top-44 opacity-0 group-hover:opacity-100 translate-y-14 group-hover:translate-y-0 origin-top transition duration-500 left-7 items-center justify-center gap-x-2 md:gap-x-4 mt-5">
              <Link
                type="button"
                to={`/details/${singleProduct._id}`}
                class="group hover:scale-125 duration-300 rounded-full shadow-2xl shadow-pink-500 bg-white flex items-center justify-center text-black w-10 h-10 border-2"
              >
                <button class="text-sm hover:rounded-full duration-500 font-medium">
                  <FaEye className=""></FaEye>
                </button>
              </Link>
              <button
                type="button"
                className="flex items-center justify-center rounded-md bg-[#FF497C] text-white px-4 md:px-5 py-3 hover:scale-110 duration-500"
              >
                <Link
                  to={`/details/${singleProduct._id}`}
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
                class="rounded-full hover:scale-125 duration-300 bg-white flex items-center justify-center text-black border-2 w-10 h-10"
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
          </Link>
        ))}
      </div>
      <div className="pagination text-center mt-10">
        {[...Array(pages).keys()].map((number) => (
          <button
            key={number}
            className={
              page === number ? "btn btn-md btn-warning" : "btn btn-sm"
            }
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SecondHandProducts;
