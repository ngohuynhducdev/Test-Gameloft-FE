import React from "react";
import iconShare from "../../../assets/images/icon-social-share.svg";
import iconMail from "../../../assets/images/mail.svg";
import iconSupport from "../../../assets/images/support.svg";
export default function Navbar() {
  return (
    <>
      <header className="">
        <nav className="navbar">
          {/* TODO: -- logo -- */}
          <a href="#" className="navbar__logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.244 19.075">
              <path
                id="Path_209"
                data-name="Path 209"
                d="M69.758,20.4v-.37a.478.478,0,0,1,.516-.455h3.819V17.968l-3.829.009a.432.432,0,0,1-.445-.432v-.623a.41.41,0,0,1,.453-.432h4.258l.043-1.693H68.856a1.08,1.08,0,0,0-1.1,1.178v5.793s-.144.972,1.185.972h5.643V20.859H70.232s-.473-.022-.473-.455m-4.241-5.61H64.3c-.327.01-.547.406-.547.406l-2.238,3.6s-.131.2-.232.2-.237-.206-.237-.206-2.189-3.355-2.339-3.6c-.259-.432-.542-.407-.542-.407h-1c-.96,0-.961,1.1-.961,1.1l-.043,6.837,2.208-.02V17.8s2.5,4.451,2.692,4.783c.1.144.158.2.224.2s.144-.043.239-.2c0-.012,2.712-4.982,2.712-4.982l-.007,5.153h2.136s.019-5.525.019-6.727-.872-1.237-.872-1.237m-19.484,3.72h-2.65s.009.086.026.187a.679.679,0,0,1,.521.482c.01.092.017.475.017,1.129,0,.525-.288.56-.288.56H41.965a1.014,1.014,0,0,1-1.092-.843V17.68a1.064,1.064,0,0,1,1.065-1.115h4.084V14.8s-2.775-.024-4.828-.024a2.194,2.194,0,0,0-2.48,2.069v2.915c0,2.979,2.2,2.994,2.2,2.994h3.968A1.231,1.231,0,0,0,46.2,21.639s-.014-2.446,0-2.771-.17-.355-.17-.355m5.561-3.74H50.311a.683.683,0,0,0-.67.453l-2.87,7.548,2.3-.023.545-1.687s2.861.012,2.812.009c.288.876.515,1.663.515,1.663H55.37s-2.863-7.2-3.084-7.6a.74.74,0,0,0-.695-.357M50.124,19.42,51,16.9l.831,2.526Zm30.994,1.467H78.5a.476.476,0,0,1-.47-.47v-5.6H75.9s.032,6.147.032,7.094c0,.9.708.83.829.83H82.21c-.7,0-1.093-1.84-1.093-1.84m6.671-6.084H84.364a2.2,2.2,0,0,0-2.185,2.212v3.33s.2,2.42,1.933,2.42c2.83,0,3.884-.053,3.884-.053a2.473,2.473,0,0,0,2.057-2.469v-3.2s-.206-2.241-2.266-2.241m-1.018,6.128c-.532,0-1.666-.013-1.666-.013s-.823.065-.823-1.024c0-1.24.059-2.54.059-2.54a.8.8,0,0,1,.913-.833h1.8a.932.932,0,0,1,.9,1c0,.977-.065,2.389-.065,2.389s.171,1.018-1.119,1.018m15.68-6.137h-9.93c-1.026,0-1.128.663-1.128.961v6.944l2.059.029s-.007-2.41-.007-2.742c0-.432.562-.442.562-.442h1.841V18.1h-1.87c-.575,0-.575-.337-.575-.337v-1.21h5.14v6.186h2.043V16.579s1.87.049,3.54,0c-.276-1.037-1.036-1.779-1.669-1.779"
                transform="translate(-7.88 -7.967)"
                fill="#141414"
              />
              <path
                id="Path_210"
                data-name="Path 210"
                d="M26.924,26.973a11.008,11.008,0,0,0,1.214-.047,4.325,4.325,0,0,0,3.523-2.633,6.539,6.539,0,0,0,.459-2.5l.014-2.7a14.841,14.841,0,0,0-.2-2.158,4.184,4.184,0,0,0-1.118-2.037,3,3,0,0,0-.916-.666,5.049,5.049,0,0,0-1.365-.432,26.272,26.272,0,0,0-2.965-.106l-5.593-.037-3.9.076a14.873,14.873,0,0,0-1.559.07,1.994,1.994,0,0,0-1.182.48,1.87,1.87,0,0,0-.7.948,8.914,8.914,0,0,0-.122,1.823s.063,2.182.073,2.5c0,.2.079.257.132.275s1.358.167,1.361.173v-.027a1.341,1.341,0,0,1,1.161-.8c.876-.052,10.53-.2,11.32-.216a1.706,1.706,0,0,1,.761.114.575.575,0,0,1,.259.288,3.74,3.74,0,0,1,.118.826s-.013.863-.013,1.109a1.236,1.236,0,0,1-1.321,1.279c-.6.02-11.7-.1-11.7-.1a3.155,3.155,0,0,1-1.322-.272c-1.106-.584-1.46-1.428-1.48-3.244,0-1.252.009-4.2.009-4.2a3.183,3.183,0,0,1,.883-2.243,3.924,3.924,0,0,1,2.466-.644h.055c.374,0,4.126,0,5.467-.037,1.408-.036,8.544.17,8.9.187a2.482,2.482,0,0,1,1.07.27,3.776,3.776,0,0,1,.975.761,4.658,4.658,0,0,1,1,2.095c.127.829.288,3.8.288,3.8a24.787,24.787,0,0,1-.213,4.219,5.332,5.332,0,0,1-1.439,2.837c-.183.187-.363.374-.363.374v.01h0c-.013.03-.043.055,0,.157a1.1,1.1,0,0,0,.525.432c.173.082.495-.056.814-.259a5.105,5.105,0,0,0,2.06-2.269,9.635,9.635,0,0,0,.7-3.572c0-.253-.026-4.747-.026-4.747a18.773,18.773,0,0,0-.144-2.985,7.633,7.633,0,0,0-1.2-2.9,4.055,4.055,0,0,0-1.6-1.367,5.813,5.813,0,0,0-.842-.347,15.147,15.147,0,0,0-4.172-.472c-1.3-.04-6.85-.078-6.85-.078s-3.933.024-5.559.106c-2.572.127-3.219.176-4.385.669a4.139,4.139,0,0,0-2.22,2.622,10.505,10.505,0,0,0-.173,2.558l.053,6.75a15.434,15.434,0,0,0,.091,2.141,5.733,5.733,0,0,0,.676,2.408,3.507,3.507,0,0,0,1.416,1.28h0l.036.017a10.815,10.815,0,0,0,3.12.472c1.4.056,5.244.049,6.252.052Z"
                transform="translate(-7.88 -7.967)"
                fill="#141414"
              />
            </svg>
          </a>
          {/* TODO: -- links -- */}
          <div className="navbar__menu">
            <ul className="navbar__links">
              <input type="text" />

              <li className="navbar__link">
                <a href="#">Home</a>
              </li>
              <li className="navbar__link">
                <a href="#">Game for Everyone</a>
              </li>
              <li className="navbar__link">
                <a href="#">Gaming for Businesses</a>
              </li>
              <li className="navbar__link">
                <a href="#">About Us</a>
              </li>
              <li className="navbar__link">
                <a href="#">Our Studios</a>
              </li>
              <li className="navbar__link">
                <a href="#">Careers</a>
              </li>
              <div className="navbar__find">
                <p>Find us on</p>
                <ul>
                  <li>
                    <a href="">1</a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
          {/* TODO: -- menu button -- */}
          <div className="navbar__icons">
            <div className="navbar__icon"></div>
          </div>
        </nav>

        {/* TODO: -- sticky social -- */}
        <nav>
          <div className="navbar__social--list">
            <div className="navbar__social--item">
              <a href="#">
                <img src={iconShare} alt="" />
              </a>
            </div>
            <div className="navbar__social--item">
              <a href="#">
                <img src={iconMail} alt="" />
              </a>
            </div>
            <div className="navbar__social--item">
              <a href="#">
                <img src={iconSupport} alt="" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
