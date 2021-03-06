import React from "react";

import imageThumnail from "./../../../../../assets/images/thumbnail-icon.png";
export default function CardItem() {
  return (
    <div className="promotion__card">
      <div className="promotion__card__container">
        <div className="promotion__card__container--image">
          <img src={imageThumnail} alt="imageThumnail" />
        </div>
        <div className="promotion__card__container--title">
          <h2>short title here</h2>
        </div>
        <div className="promotion__card__container--line"></div>
        <div className="promotion__card__container--desc">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, est
            exercitationem? Fugit, earum iure quibusdam quo amet nulla,
            obcaecati aperiam repudiandae, dicta error dolorem quod possimus
            blanditiis facere autem. Quasi?
          </p>
        </div>
        <div className="promotion__card__container--button">
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}
