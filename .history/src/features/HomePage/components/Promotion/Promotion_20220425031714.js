import React from "react";
import CardSlider from "./templates/CardSlider";

export default function Promotion() {
  const data = [];
  let i = 0;
  while (i < 10) {
    data.push({});
    i++;
  }
  return (
    <>
      <section className="promotion">
        <div className="promotion__wrapper">
          <div className="promotion__wrapper--title">
            <h2>Special Events & Promotional</h2>
          </div>
          <div className="promotion__wrapper--desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              repudiandae aperiam numquam quis quibusdam quae molestias quia
              impedit nam, eaque voluptatum illo ab qui nisi provident dolorum
              sapiente ipsum. Eveniet?
            </p>
          </div>
        </div>
        {/* <div style={{ height: "65%", width: "100%" }}> */}
        <div>
          <CardSlider data={data} />
        </div>
      </section>
    </>
  );
}
