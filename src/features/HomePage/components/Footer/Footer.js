import React from "react";
import facebook from "./../../../../assets/images/facebook.png";
import linkedin from "./../../../../assets/images/linkedin.png";
import twitter from "./../../../../assets/images/twitter.png";
import youtube from "./../../../../assets/images/youtube.png";
import logoWhite from "./../../../../assets/images/Gameloft_Logo_Flat_White_Line.png";

// import { Dropdown } from "semantic-ui-react";

import { GrFacebook, GrLinkedin, GrYoutube, GrTwitter } from "react-icons/gr";

// const friendOptions = [
//   {
//     key: "Jenny Hess",
//     text: "Jenny Hess",
//     value: "Jenny Hess",
//     image: {
//       avatar: true,
//       src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
//     },
//   },
//   {
//     key: "Elliot Fu",
//     text: "Elliot Fu",
//     value: "Elliot Fu",
//     image: {
//       avatar: true,
//       src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
//     },
//   },
//   {
//     key: "Stevie Feliciano",
//     text: "Stevie Feliciano",
//     value: "Stevie Feliciano",
//     image: {
//       avatar: true,
//       src: "https://react.semantic-ui.com/images/avatar/small/stevie.jpg",
//     },
//   },
//   {
//     key: "Christian",
//     text: "Christian",
//     value: "Christian",
//     image: {
//       avatar: true,
//       src: "https://react.semantic-ui.com/images/avatar/small/christian.jpg",
//     },
//   },
//   {
//     key: "Matt",
//     text: "Matt",
//     value: "Matt",
//     image: {
//       avatar: true,
//       src: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
//     },
//   },
//   {
//     key: "Justen Kitsune",
//     text: "Justen Kitsune",
//     value: "Justen Kitsune",
//     image: {
//       avatar: true,
//       src: "https://react.semantic-ui.com/images/avatar/small/justen.jpg",
//     },
//   },
// ];

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__follow">
          <div className="footer__wrapper__follow--social">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#">
                  {/* <img src={facebook} alt="" /> */}
                  <GrFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <img src={linkedin} alt="" /> */}
                  <GrLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  {/* <img src={twitter} alt="" /> */}
                  <GrTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  {/* <img src={youtube} alt="" /> */}
                  <GrYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__wrapper__follow--logo">
            <img src={logoWhite} alt="" />
          </div>
          <div className="footer__wrapper__follow--language">
            {/* <select name="" id="" placeholder="Hello" style={{ width: "100%" }}>
              <option value="1">1</option>
            </select> */}
            {/* <select name="" id="">
              <option value="" disabled selected hidden>
                <GrTwitter /> English
              </option>
              <option value="">
                <GrTwitter /> English
              </option>
            </select> */}
            {/* <Dropdown
              placeholder="Select Friend"
              fluid
              selection
              options={friendOptions}
            /> */}
          </div>
        </div>
        <div className="footer__wrapper__links">
          <div className="footer__wrapper__links--visit">
            <h4>Visit</h4>
            <a href="#">Gameloft Games</a>
            <a href="#">Gameloft Careers</a>
            <a href="#">Gameloft News</a>
            <a href="#">Gameloft Forum</a>
            <a href="#">Gameloft Corporate</a>
            <a href="#">Gameloft Advertising</a>
            <a href="#">Gameloft Support</a>
          </div>
          <div className="footer__wrapper__links--legal">
            <h4>Legal</h4>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
            <a href="#">EULA</a>
            <a href="#">Legal Notices</a>
            <a href="#">Event Rules</a>
            <a href="#">Contest Rules</a>
            <a href="#">Business Contacts</a>
          </div>
        </div>
        {/* <div className="footer__wrapper--copyright">
          <p>
            ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo
            are trademarks of Gameloft in the U.S. and/or other countries. All
            other trademarks are the property of their respective owners.
          </p>
        </div> */}
      </div>
    </section>
  );
}
