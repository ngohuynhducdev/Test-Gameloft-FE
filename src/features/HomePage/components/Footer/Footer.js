import React from "react";
// import facebook from "./../../../../assets/images/facebook.png";
// import linkedin from "./../../../../assets/images/linkedin.png";
// import twitter from "./../../../../assets/images/twitter.png";
// import youtube from "./../../../../assets/images/youtube.png";
import logoWhite from "./../../../../assets/images/Gameloft_Logo_Flat_White_Line.png";

import { GrFacebook, GrLinkedin, GrYoutube, GrTwitter } from "react-icons/gr";

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
            <select name="" id="" placeholder="Hello" style={{ width: "100%" }}>
              <option value="1">1</option>
            </select>
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
        <div className="footer__wrapper--copyright">
          <p>
            ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo
            are trademarks of Gameloft in the U.S. and/or other countries. All
            other trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </section>
  );
}
