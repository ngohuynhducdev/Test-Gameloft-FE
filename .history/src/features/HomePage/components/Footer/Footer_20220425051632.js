import React from "react";
import facebook from "./../../../../assets/images/facebook.png";
import linkedin from "./../../../../assets/images/linkedin.png";
import twitter from "./../../../../assets/images/twitter.png";
import youtube from "./../../../../assets/images/youtube.png";
import logoWhite from "./../../../../assets/images/Gameloft_Logo_Flat_White_Line.png";
export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__container--social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <img src={linkedin} alt="" />
              <a href="#"></a>
            </li>
            <li>
              <img src={twitter} alt="" />
              <a href="#"></a>
            </li>
            <li>
              <img src={youtube} alt="" />
              <a href="#"></a>
            </li>
          </ul>
        </div>
        <div className="footer__container--info">
          <img src={logoWhite} alt="" />
          <div className="footer__container--list">
            <div className="footer__container--item">
              <a href="#">Gameloft Games</a>
              <a href="#">Gameloft Careers</a>
              <a href="#">Gameloft News</a>
              <a href="#">Gameloft Forum</a>
              <a href="#">Gameloft Corporate</a>
              <a href="#">Gameloft Advertising</a>
              <a href="#">Gameloft Support</a>
            </div>
            <div className="footer__container--item">
              <a href="#"> Terms of Use</a>
              <a href="#">Gameloft Careers</a>
              <a href="#">Gameloft News</a>
              <a href="#">Gameloft Forum</a>
              <a href="#">Gameloft Corporate</a>
              <a href="#">Gameloft Advertising</a>
              <a href="#">Gameloft Support</a>
              Terms of Use Privacy Policy Cookies Policy EULA
            </div>
          </div>
          <div className="footer__container--copyright">3</div>
        </div>
      </div>
    </section>
  );
}
