import React from "react";

import CardItem from "./CardItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        centeredSlides
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
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
        className="mySwiper"
      >
        {[...Array(6)].map((item, index) => (
          <SwiperSlide key={`swiper-slide-promotion-${index}`}>
            <CardItem />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
