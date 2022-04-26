import React from "react";
import CardSlider from "./templates/CardSlider";
import Fade from "react-reveal/Fade";
export default function Promotion() {
  return (
    <>
      <section className="promotion">
        <Fade bottom>
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
          <div>
            <CardSlider />
          </div>
        </Fade>
      </section>
    </>
  );
}
