import React from "react";

import Fade from "react-reveal/Fade";
import GameCardSlider from "./templates/GameCardSlider";

export default function ExclusiveContent() {
  return (
    <>
      <section className="exclusive">
        <Fade bottom>
          <div className="exclusive__title">
            <h3>Exclusive Game Content</h3>
          </div>
          <div className="exclusive__desc">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos.
            </p>
          </div>
          <div className="exclusive__slider">
            <GameCardSlider />
          </div>
        </Fade>
      </section>
    </>
  );
}
