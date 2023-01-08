import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  return (
    <section className="flex justify-between gap-5 max-w-[1350px] mx-auto my-10 cursor-pointer">
      <div className="group h-64 w-full overflow-hidden rounded-md relative">
        <div
          style={{ backgroundImage: `url('images/poster-01.png')` }}
          className="h-full w-full bg-no-repeat bg-cover group-hover:scale-110 transition-all duration-500 rounded-md"
        ></div>
        <div className="group z-10 ml-[25%] absolute top-10 left-28">
          <h1 className="text-white text-5xl font-bold">
            Rich Sound, <br /> for less,
          </h1>
          <h3 className="text-gray-100 opacity-50 group-hover:opacity-100 mt-5 text-2xl duration-500 transition-all">
            Collection <BsArrowRight className="inline-block"></BsArrowRight>
          </h3>
        </div>
      </div>
      <div className="group h-64 w-full overflow-hidden rounded-md relative">
        <div
          style={{ backgroundImage: `url('images/poster-02.png')` }}
          className="h-full w-full bg-no-repeat bg-cover group-hover:scale-110 transition-all duration-500 rounded-md"
        ></div>
        <div className="group z-10 absolute top-7 left-14">
        <h3 className="text-gray-100 opacity-50 group-hover:opacity-100 mt-5 text-2xl duration-500 transition-all mb-5">
            50% offer in winter
          </h3>
          <h1 className="text-white text-5xl font-bold">
            Get VR, <br /> Reality Glass,
          </h1>
          
        </div>
      </div>
    </section>
  );
};

export default Features;
