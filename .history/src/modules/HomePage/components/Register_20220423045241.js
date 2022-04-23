import React from "react";

export default function Register() {
  return (
    <>
      <section className="register">
        <h2>Stay in the Know!</h2>
        <p>
          Don't get left behind! <br /> Subscribe to our newsletters today!
        </p>
        <div className="register__form">
          <form action="">
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

            <div className="register__form--check">
              <div className="register__form--item">
                {/* TODO: Box Check */}
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                {/* TODO: Text */}
                <div>
                  <p>
                    By signing up, I confirm that I am 13 years old or older. I
                    agree to the Gameloft Terms and Conditions and I have read
                    the Privacy Policy.
                  </p>
                </div>
              </div>
              <div className="register__form--item">
                {/* TODO: Box Check */}
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                {/* TODO: Text */}
                <div>
                  <p>
                    I agree to receive promotional offers relating to all
                    Gameloft games and services.
                  </p>
                </div>
              </div>
            </div>
            <button>Button</button>
          </form>
        </div>
      </section>
    </>
  );
}
