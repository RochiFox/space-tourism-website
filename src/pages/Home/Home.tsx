import * as React from "react";
import "./index.scss";

const Home = () => {
  return (
    <div className="home home_background-img">
      <div className="home__info">
        <div className="home__text">
          <p className="home__pretitle">So, you want to travel to</p>
          <h1 className="home__title">SPACE</h1>
          <p className="home__subtitle">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="home__explore-btn">Explore</button>
      </div>
    </div>
  );
};

export default Home;
