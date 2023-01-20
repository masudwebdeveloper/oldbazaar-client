import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import SwiperClass from "swiper/types/swiper-class";
import { FreeMode, Navigation, Thumbs, Controller } from "swiper";

export default function DemoThums({ picture }) {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [firstSwiper, setFirstSwiper] = useState();
  const [selected, setSelected] = useState(0);

  const [secondSwiper, setSecondSwiper] = useState();
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef();

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, [swiper1Ref]);

  return (
    <div className="w-full">
      <Swiper
        onSwiper={(swiper) => {
          if (swiper1Ref.current !== null) {
            swiper1Ref.current = swiper;
          }
        }}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "25px",
        }}
        preloadImages={false}
        controller={{ control: secondSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        // className="w-[848px] h-[454px] rounded-xl"
      >
        {[...Array(6).keys()].map((i) => (
          <SwiperSlide
            key={i}
            className="flex h-96 items-center justify-center"
          > 
            <img className="h-96" src={picture} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        controller={{ control: firstSwiper }}
        loop={false}
        spaceBetween={10}
        slidesPerView={8}
        watchSlidesProgress
        touchRatio={0.2}
        preloadImages={false}
        lazy
        slideToClickedSlide={true}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs, Controller]}
        className="h-[100px] w-full mt-[20px]"
      >
        {[...Array(6).keys()].map((item, i) => (
          <SwiperSlide
            key={i}
            onClick={() => setSelected(item + 1)}
            className={`h-[100px] border-2 ${
              selected === i + 1 ? "border-orange-400" : ""
            } flex items-center justify-center py-2 hover:border-orange-400`}
          >
            <img className="object-contain h-[100px] py-2" src={picture} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// {[...Array(9).keys()].map((item, i) => (
//     <SwiperSlide
//       key={i}
//       onClick={() => setActive(!active)}
//       className={`h-[100px] border-2 ${
//         active ? "border-2" : "border-orange-400"
//       } flex items-center justify-center py-2`}
//     >
//       <img className="object-contain h-[100px] py-2" src={picture} />
//     </SwiperSlide>
//   ))}
