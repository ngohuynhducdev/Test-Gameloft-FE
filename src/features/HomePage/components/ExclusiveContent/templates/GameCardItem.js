import React from "react";
import imageThumnail from "./../../../../../assets/images/thumbnail-icon.png";
import { AiOutlineDownload } from "react-icons/ai";
export default function GameCardItem() {
  return (
    <div className="gcard">
      <div className="gcard__thumnail">
        <img src={imageThumnail} alt="" />
      </div>
      <div className="gcard__icon">
        <div className="gcard__icon--item">
          <AiOutlineDownload />
        </div>
      </div>
    </div>
  );
}
