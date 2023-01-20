import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useRole from "../../../hooks/useRole";
import BookingModal from "../BookingModal/BookingModal";
import { Navigation, FreeMode, Thumbs } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import DemoThums from "../DemoThums";

const ProductsDetails = () => {
  const product = useLoaderData();
  const [option, setOption] = useState(true);
  // const [activeThumb, setThumbsSwiper] = useState();
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    resalePirce,
    originalPirce,
    sellerName,
    picture,
    yearOfUse,
    postTime,
    location,
    description,
    status,
  } = product;
  const wishlist = localStorage.getItem(`${_id}`);
  const [isAdmin, isSeller] = useRole(user?.email);
  const handleWishlist = (product) => {
    const wishlistProduct = {
      ...product,
      email: user.email,
      productId: product._id,
    };
    delete wishlistProduct._id;
    fetch(`http://localhost:5000/wishlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlistProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("This reserved for you buy soon");
          localStorage.setItem(`${product._id}`, true);
        }
        if (!data.acknowledged) {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.error("wishlist error", err);
      });
  };

  const handleReport = (product) => {
    console.log(product._id);
    const reportProduct = {
      ...product,
      email: user.email,
      productId: product._id,
      report: "Reported",
    };
    delete reportProduct._id;
    fetch(`http://localhost:5000/report`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("This product reported successfull");
          localStorage.setItem(`${product._id}`, true);
        }
        if (!data.acknowledged) {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.error("reported error", err);
      });
  };
  return (
    <div>
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 className="text-2xl font-bold lg:text-3xl">{title}</h1>

            <p className="mt-1 text-sm text-gray-500">
              year of use: {yearOfUse} year
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            {/* use to swiper */}

              <div className="relative lg:col-span-3 mt-4">
                <DemoThums picture={picture}></DemoThums>
              </div>

            <div className="lg:sticky lg:top-0">
              <form className="space-y-4 lg:pt-8">
                <fieldset>
                  <legend className="text-lg font-bold">
                    SellerName: {sellerName}
                  </legend>

                  <div className="mt-2 flex gap-1">
                    <label for="material_cotton" className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_cotton"
                        name="material"
                        className="peer sr-only"
                        checked
                      />

                      <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        Post Date: {postTime}
                      </span>
                    </label>

                    <label for="material_wool" className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_wool"
                        name="material"
                        className="peer sr-only"
                        checked
                      />

                      <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        location: {location}
                      </span>
                    </label>
                  </div>
                </fieldset>

                <div className="rounded border bg-gray-100 p-4">
                  <p className="text-sm">
                    <span className="block">
                      {" "}
                      Pay as low as $3/mo with 0% APR.{" "}
                    </span>

                    <Link to="/" className="mt-1 inline-block underline">
                      {" "}
                      Find out more{" "}
                    </Link>
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold text-green-500">
                    Resale Price: ${resalePirce}
                  </p>
                  <p className="text-xl font-bold">
                    Original Price: ${originalPirce}
                  </p>
                </div>

                <label
                  type="submit"
                  htmlFor="booking-modal"
                  disabled={isSeller || isAdmin}
                  className={`w-full btn rounded px-6 bg-primary py-3 text-sm font-bold uppercase tracking-wide text-white`}
                >
                  Buy Now
                </label>

                <div className="flex justify-between mt-5">
                  <button
                    type="button"
                    className={`rounded-full ${
                      wishlist ? "bg-red-600" : "bg-black"
                    } p-2 text-white`}
                    title="Wishlist"
                    disabled={isSeller || isAdmin}
                    onClick={() => handleWishlist(product)}
                  >
                    <span className="sr-only">Wishlist</span>
                    <svg
                      className="h-6 w-6"
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
                  <button
                    type="button"
                    className={`rounded-full bg-black p-2 text-white`}
                    title="Report"
                    disabled={isSeller || isAdmin}
                    onClick={() => handleReport(product)}
                  >
                    <span className="sr-only">Report</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
                <p>{description}</p>

                <h2>Features</h2>

                <ul>
                  <li>Smooth neck design</li>
                  <li>Breathable fabric</li>
                  <li>Odour prevention</li>
                  <li>Made from recycled materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {option && (
        <BookingModal product={product} setOption={setOption}></BookingModal>
      )}
    </div>
  );
};

export default ProductsDetails;
