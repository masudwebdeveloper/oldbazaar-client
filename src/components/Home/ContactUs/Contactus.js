import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
// import bgImage from '../../../assets/images/bg-image-5.jpg'

const Contactus = () => {
  return (
    <section
      style={{ backgroundImage: `url('bg-image-5.jpg')` }}
      className="max-w-[1350px] bg-cover bg-current mx-auto h-96 flex items-center"
    >
      <div className="pl-7 md:pl-14 lg:pl-28 duration-500 transition">
        <div className="mb-14">
          <span className="inline-block h-1 w-12 bg-[#3577F0]"></span>
          <h2 className="mt-1 text-md font-extrabold tracking-wide md:text-md text-[#3577F0] flex items-center gap-x-3">
            <span className="w-8 h-8 border-4 border-blue-700 shadow-inner shadow-slate-50 flex items-center justify-center bg-[#3577F0] rounded-full">
              <HiOutlineMailOpen className="inline-block text-red-50 animate-pulse"></HiOutlineMailOpen>
            </span>
            Newsletter
          </h2>
          <h1 className="my-4 text-2xl lg:text-5xl font-extrabold tracking-wide text-gray-900">
            Get weekly update
          </h1>
        </div>
        <div className="">
          <form>
            <div style={{backgroundImage: `url('images/mail-send.png')`}} className="relative inline-block before:absolute before:left-8 before:top-5 before:z-30">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered w-auto pl-10 text-lg"
                required
              />
            </div>
            <input
              type="submit"
              value="Subscribe"
              className="btn btn-accent text-slate-50 mx-auto ml-5 hover:scale-110 transition-all duration-500"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
