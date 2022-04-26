import React, { useEffect, useRef, useState } from "react";

import CardItem from "./CardItem";

// TODO: Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/bundle";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function CardSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        // pagination={pagination}
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          // 768: {
          //   slidesPerView: 4,
          //   spaceBetween: 40,
          // },
          1920: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardItem />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
