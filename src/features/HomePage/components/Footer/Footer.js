import React from "react";

import logoWhite from "./../../../../assets/images/Gameloft_Logo_Flat_White_Line.png";
import Fade from "react-reveal/Fade";
import { GrFacebook, GrLinkedin, GrYoutube, GrTwitter } from "react-icons/gr";

export default function Footer() {
  return (
    <section className="footer">
      <Fade bottom>
        <div className="footer__wrapper">
          <div className="footer__wrapper__follow">
            <div className="footer__wrapper__follow--social">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a href="Facebook">
                    <GrFacebook />
                  </a>
                </li>
                <li>
                  <a href="Linkedin">
                    <GrLinkedin />
                  </a>
                </li>
                <li>
                  <a href="Twitter">
                    <GrTwitter />
                  </a>
                </li>
                <li>
                  <a href="Youtube ">
                    <GrYoutube />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__wrapper__follow--logo">
              <img src={logoWhite} alt="" />
            </div>
            <div className="footer__wrapper__follow--language">
              <select name="" id="" style={{ width: "100%" }}>
                <option value="English">English</option>
                <option value="English">French</option>
              </select>
            </div>
          </div>
          <div className="footer__wrapper__links">
            <div className="footer__wrapper__links--visit">
              <h4>Visit</h4>
              <a href="Games">Gameloft Games</a>
              <a href="Careers">Gameloft Careers</a>
              <a href="News">Gameloft News</a>
              <a href="Forum">Gameloft Forum</a>
              <a href="Corporate">Gameloft Corporate</a>
              <a href="Advertising">Gameloft Advertising</a>
              <a href="Support">Gameloft Support</a>
            </div>
            <div className="footer__wrapper__links--legal">
              <h4>Legal</h4>
              <a href="Terms">Terms of Use</a>
              <a href="Privacy">Privacy Policy</a>
              <a href="Cookies">Cookies Policy</a>
              <a href="EULA">EULA</a>
              <a href="Legal">Legal Notices</a>
              <a href="Event">Event Rules</a>
              <a href="Contest">Contest Rules</a>
              <a href="Business">Business Contacts</a>
            </div>
          </div>
          <div className="footer__wrapper--copyright">
            <p>
              ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft
              logo are trademarks of Gameloft in the U.S. and/or other
              countries. All other trademarks are the property of their
              respective owners.
            </p>
          </div>
        </div>
        <div className="footer__wrapper--copyrightdesktop">
          <p>
            ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo
            are trademarks of Gameloft in the U.S. and/or other countries. All
            other trademarks are the property of their respective owners.
          </p>
        </div>
      </Fade>
    </section>
  );
}
