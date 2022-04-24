import Reactfrom "react";
import Slider from "react-slick";

export default function carosel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        <div className="divCarosel">
          <h3>1</h3>
        </div>
        <div className="divCarosel">
          <h3>2</h3>
        </div>
        <div className="divCarosel">
          <h3>3</h3>
        </div>
        <div className="divCarosel">
          <h3>4</h3>
        </div>
        <div className="divCarosel">
          <h3>5</h3>
        </div>
        <div className="divCarosel">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
