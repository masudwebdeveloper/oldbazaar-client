import React from "react";
import { TypeAnimation } from "react-type-animation";
import bannerPhoto from "../../../assets/images/apple-banner.jpg";
import Button from "../../Others/Button/Button";

const Banner = () => {
  return (
    <section className="flex h-screen w-full justify-between items-center px-8 max-w-[1350px] mx-auto bg-[#FAFAFA]">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                "Choose your", // Types 'One'
                1000, // Waits 1s
                "favorite one.", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                () => {
                  // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", fontWeight: 700 }}
            />
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven by values</span>
        </h1>
        <div className="space-x-8 items-center">
          <Button title="Buy Now" />
          <a
            href="##"
            className="relative cursor-pointer text-lg font-medium before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-black before:transition-all before:duration-200 hover:before:scale-x-100"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px] lg:mt-20 bg-white">
        <img alt="" src={bannerPhoto} className="object-fill"></img>
      </div>
    </section>
  );
};

export default Banner;
