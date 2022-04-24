import React from "react";
import Slider from "react-slick";

export default function carosel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: false,
  };
  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        {/* TODO: -- Promotion Card -- */}
        <h1>hello</h1>
        <h1>hello</h1>
        {/* <div className="promotion__card">
          <div className="promotion__container">
            <div className="promotion__container--title">
              <h2>short title here</h2>
            </div>
            <div className="promotion__container--line"></div>
            <div className="promotion__container--desc">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
                est exercitationem? Fugit, earum iure quibusdam quo amet nulla,
                obcaecati aperiam repudiandae, dicta error dolorem quod possimus
                blanditiis facere autem. Quasi?
              </p>
            </div>
            <div className="promotion__container--button">
              <button>Read More</button>
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
}
