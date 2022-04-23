import React from "react";
import Minion from "../../../../assets/images/Minion.png";
export default function ContactForm() {
  return (
    <>
      <section className="form">
        <div className="form__image">
          <img src={Minion} alt="" />
        </div>
        <div className="form__container">
          <form action="">
            <h2>Stay in the Know!</h2>
            <p>
              Don't get left behind! <br /> Subscribe to our newsletters today!
            </p>
            {/* TODO: -- input -- */}
            <input type="text" name="" placeholder="Name" id="" />
            <input type="text" name="" id="" placeholder="Email" />
            <select name="" id="">
              <option value="" disabled selected hidden>
                Country
              </option>
            </select>
            <select name="" id="">
              <option value="" disabled selected hidden>
                Platform
              </option>
            </select>
            <div className="form__policy">
              <div className="form__policy--item">
                {/* TODO: Box Check */}
                <input type="checkbox" name="" id="" />
                {/* TODO: Text */}
                <p>
                  By signing up, I confirm that I am 13 years old or older. I
                  agree to the Gameloft Terms and Conditions and I have read the
                  Privacy Policy.
                </p>
              </div>
              <div className="form__policy--item">
                {/* TODO: Box Check */}
                <input type="checkbox" name="" id="" />
                {/* TODO: Text */}
                <p>
                  I agree to receive promotional offers relating to all Gameloft
                  games and services.
                </p>
              </div>
            </div>
            <button>Button</button>
          </form>
        </div>
      </section>
    </>
  );
}
