import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import GameCardItem from "./GameCardItem";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function GameCardSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        grabCursor
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper1"
      >
        {[...Array(10)].map((item, index) => (
          <SwiperSlide key={`swiper-slide-${index}`}>
            <GameCardItem />
          </SwiperSlide>
        ))}

        <div className="button__nav">
          <div ref={prevRef} className="button__nav--left">
            <a href="ArrowLeft">
              <BsArrowLeft />
            </a>
          </div>
          <div ref={nextRef} className="button__nav--right">
            <a href="ArrowRight">
              <BsArrowRight />
            </a>
          </div>
        </div>
      </Swiper>
    </>
  );
}
