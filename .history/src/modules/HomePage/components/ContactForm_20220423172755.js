import React from "react";
import { useState } from "react";
export default function ContactForm() {
  const [name, setName] = useState();
  const [email, setMail] = useState();
  const [country, setCountry] = useState();
  const [platform, setPlatform] = useState();
  return (
    <>
      <section className="form">
        <form action="" className="form__contact">
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
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <select name="" id="">
            <option value="" disabled selected hidden>
              Platform
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <div className="form__policy">
            <div className="rform__policy--item">
              {/* TODO: Box Check */}
              <input type="checkbox" name="" id="" />
              {/* TODO: Text */}
              <p>
                By signing up, I confirm that I am 13 years old or older. I
                agree to the Gameloft Terms and Conditions and I have read the
                Privacy Policy.
              </p>
            </div>
            <div className="register__form--item">
              {/* TODO: Box Check */}
              <input type="checkbox" name="" id="" />
              {/* TODO: Text */}
              <p>
                I agree to receive promotional offers relating to all Gameloft
                games and services.
              </p>
            </div>
            <button>Button</button>
          </div>
        </form>
      </section>
    </>
  );
}
