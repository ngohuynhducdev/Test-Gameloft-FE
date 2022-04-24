import React from "react";
import CardItem from "./templates/CardItem";

export default function Promotion() {
  return (
    <section className="promotion">
      <div className="promotion__title">
        <h2>Special Events & Promotional</h2>
      </div>
      <div className="promotion__desc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          repudiandae aperiam numquam quis quibusdam quae molestias quia impedit
          nam, eaque voluptatum illo ab qui nisi provident dolorum sapiente
          ipsum. Eveniet?
        </p>
      </div>
      {/* TODO: -- Promotion Card -- */}
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
      {/* TODO: test stick */}
      <CardItem />
    </section>
  );
}
