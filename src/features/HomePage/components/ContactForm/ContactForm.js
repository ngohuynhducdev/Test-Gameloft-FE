import React from "react";
import { Fade } from "react-reveal";
import Minion from "../../../../assets/images/Minion.png";
export default function ContactForm() {
  return (
    <>
      <section className="form">
        <Fade bottom>
          <div className="form__image">
            <img src={Minion} alt="" />
          </div>
          <div className="form__container">
            <form action="">
              <h2>Stay in the Know!</h2>
              <p>
                Don't get left behind! <br /> Subscribe to our newsletters
                today!
              </p>

              <input type="text" name="" placeholder="Name" id="" />
              <input type="text" name="" id="" placeholder="Email" />
              <select name="" id="">
                <option value="" disabled selected hidden>
                  Country
                </option>
                <option value="">Vietnam</option>
                <option value="">US</option>
                <option value="">Thailand</option>
              </select>
              <select name="" id="">
                <option value="" disabled selected hidden>
                  Platform
                </option>
                <option value="">Windows</option>
                <option value="">iOS</option>
                <option value="">Android</option>
              </select>
              <div className="form__policy">
                <div className="form__policy--item">
                  <input type="checkbox" name="" id="" />

                  <p>
                    By signing up, I confirm that I am 13 years old or older. I
                    agree to the Gameloft Terms and Conditions and I have read
                    the Privacy Policy.
                  </p>
                </div>
                <div className="form__policy--item">
                  <input type="checkbox" name="" id="" />

                  <p>
                    I agree to receive promotional offers relating to all
                    Gameloft games and services.
                  </p>
                </div>
              </div>
              <button>Button</button>
            </form>
          </div>
        </Fade>
      </section>
    </>
  );
}
