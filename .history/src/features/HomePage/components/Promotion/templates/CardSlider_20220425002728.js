import React from "react";
import Slider from "react-slick";
export default function CardSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };
  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        <h1>1</h1>
        <h1>2</h1>
      </Slider>
    </div>
  );
}
