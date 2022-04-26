import React from "react";
import Fade from "react-reveal/Fade";

export default function Community() {
  return (
    <section className="community">
      <Fade bottom>
        <div className="community__title">
          <h3>Game Community Hub</h3>
          <p>Live Game Updates</p>
        </div>
        <div className="community__card">{/* TODO: Import Card Game*/}</div>

        <div className="community__post">
          <div className="community__post--title">
            <h3>All Posts</h3>
          </div>
          <div className="community__post--icon"></div>
        </div>

        <div className="community__post__card">
          {/* TODO: Import Card Post*/}
        </div>
      </Fade>
    </section>
  );
}
