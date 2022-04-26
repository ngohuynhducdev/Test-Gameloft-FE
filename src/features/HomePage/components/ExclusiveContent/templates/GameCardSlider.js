import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

// import "./_GameCardStyle.scss";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import GameCardItem from "./GameCardItem";

export default function GameCardSlider() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        // centeredSlides={true}
        loop={true}
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
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <GameCardItem />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardItem />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardItem />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardItem />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardItem />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardItem />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardItem />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardItem />
        </SwiperSlide>

        <SwiperSlide>
          <GameCardItem />
        </SwiperSlide>

        <SwiperSlide>
          <GameCardItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
