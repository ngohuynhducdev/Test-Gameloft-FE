import React from "react";
import microsoftIcon from "./../../../assets/images/microsoft.png";
import nitendoIcon from "./../../../assets/images/nitendo.png";
import steamIcon from "./../../../assets/images/steam.png";
export default function StoreButton() {
  return (
    <>
      {/* TODO: -- Store Button -- */}
      <section className="store__button">
        <h2>Download latest version</h2>
        <div className="store__button--list">
          <img src={microsoftIcon} alt="" store__button--item />
          <img src={steamIcon} alt="" store__button--item />
          <img src={nitendoIcon} alt="" store__button--item />
        </div>
      </section>
    </>
  );
}
