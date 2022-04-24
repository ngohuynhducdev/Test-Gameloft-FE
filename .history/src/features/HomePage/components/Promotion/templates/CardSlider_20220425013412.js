import React from "react";
import Slider from "react-slick";
import CardItem from "./CardItem";
export default function CardSlider() {
  const settings = {
    className: "center",
    // centerMode: centerMode,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    // slidesToShow: slidesToShow,
    slidesToScroll: 1,
    touchMove: false,
    cssEase: "linear",
    // customPaging: (i: number) => <CircleProgressComponent imageNumber={i} value={progress} />,
  };
  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        <h1>1</h1>
        <h1>2</h1>
        <CardItem />
      </Slider>
    </div>
  );
}
