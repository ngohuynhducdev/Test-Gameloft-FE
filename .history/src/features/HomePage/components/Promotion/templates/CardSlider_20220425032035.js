import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CardItem from "./CardItem";
export default function CardSlider() {
  const settings = {
    className: "center",
    // centerMode: centerMode,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    // slidesToShow: slidesToShow,
    slidesToScroll: 1,
    touchMove: true,
    cssEase: "linear",
    // customPaging: (i: number) => <CircleProgressComponent imageNumber={i} value={progress} />,
  };
  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        <CardItem />
        <CardItem />
        <CardItem />
      </Slider>
    </div>
  );
}
