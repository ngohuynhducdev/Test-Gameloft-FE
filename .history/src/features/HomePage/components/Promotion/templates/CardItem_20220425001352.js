import React from "react";

export default function CardItem() {
  return (
    <>
      <div className="promotion__card">
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
      </div>
    </>
  );
}
