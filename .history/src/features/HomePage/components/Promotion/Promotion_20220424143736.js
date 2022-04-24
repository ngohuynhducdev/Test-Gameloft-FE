import React from "react";

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
      <div className="promotion__card">
        <div className="promotion__card--title">
          <h2>short title here</h2>
        </div>
        <div className="promotion__card--line"></div>
        <div className="promotion__card--desc">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, est
            exercitationem? Fugit, earum iure quibusdam quo amet nulla,
            obcaecati aperiam repudiandae, dicta error dolorem quod possimus
            blanditiis facere autem. Quasi?
          </p>
        </div>
        <div className="promotion__card--button">
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}
