import React from "react";
import microsoftIcon from "./../../../Assets/images/microsoft.png";
import nitendoIcon from "./../../../Assets/images/nitendo.png";
import steamIcon from "./../../../Assets/images/steam.png";
export default function StoreButton() {
  return (
    <>
      {/* TODO: -- Store Button -- */}
      <div className="store__button">
        <h2>Download latest version</h2>
        <div className="store__button--list">
          <img src={microsoftIcon} alt="" />
          <img src={steamIcon} alt="" />
          <img src={nitendoIcon} alt="" />
        </div>
      </div>
    </>
  );
}
