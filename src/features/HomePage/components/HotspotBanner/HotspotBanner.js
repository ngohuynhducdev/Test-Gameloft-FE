import React from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import microsoftIcon from "./../../../../assets/images/microsoft.png";
import nitendoIcon from "./../../../../assets/images/nitendo.png";
import steamIcon from "./../../../../assets/images/steam.png";
import Fade from "react-reveal/Fade";

export default function HotspotBanner() {
  return (
    <>
      <section className="banner">
        {/* TODO: -- Banner Image -- */}
        <div className="banner__img"></div>
        {/* TODO: -- Product Description -- */}
        <Fade bottom>
          <div className="banner__desc ">
            <h2>Gameloft Game</h2>
            <p>
              Tycoon / Simulation |
              <span>
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiFillStar color="#FFC107" />
                <AiOutlineStar />
              </span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae temporibus doloremque esse nisi enim placeat quasi
              deleniti nulla vel quos illo officia, eaque, eum quaerat numquam
              corrupti amet suscipit. Officiis?
            </p>
          </div>
        </Fade>
      </section>

      {/* TODO: -- Store Button -- */}
      <div className="banner__button">
        <Fade bottom>
          <h2>Download latest version</h2>
          <div className="banner__button--list">
            <img src={microsoftIcon} alt="" className="banner__button--item" />
            <img src={steamIcon} alt="" className="banner__button--item" />
            <img src={nitendoIcon} alt="" className="banner__button--item" />
          </div>
        </Fade>
      </div>
    </>
  );
}
