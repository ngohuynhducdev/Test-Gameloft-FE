import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export default function Banner() {
  return (
    <>
      <section className="banner">
        {/* TODO: -- Banner Image -- */}
        <div className="banner__img"></div>
        {/* TODO: -- Product Description -- */}
        <div className="banner__des ">
          <h2>Gameloft Game</h2>
          <p>
            Tycoon / Simulation
            <span>
              <AiFillStar color="#FFC107" />
              <AiFillStar color="#FFC107" />
              <AiFillStar color="#FFC107" />
              <AiFillStar color="#FFC107" />
              <AiOutlineStar />
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            temporibus doloremque esse nisi enim placeat quasi deleniti nulla
            vel quos illo officia, eaque, eum quaerat numquam corrupti amet
            suscipit. Officiis?
          </p>
        </div>

        {/* TODO: -- Store Button -- */}
        <div className="store__button">
          <h2>Download latest version</h2>
          <div className="store__button--list">
            <img src={microsoftIcon} alt="" className="store__button--item" />
            <img src={steamIcon} alt="" className="store__button--item" />
            <img src={nitendoIcon} alt="" className="store__button--item" />
          </div>
        </div>
      </section>
    </>
  );
}
