import * as React from "react";
import { useDispatch } from "react-redux/es/exports";
import { setActiveLink } from "../../redux/reducers/slice";
import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  const dispatch = useDispatch();

  const handleLinkClick = (path: string) => {
    dispatch(setActiveLink(path));
  };

  return (
    <div className="home home_background-img">
      <div className="home__info">
        <div className="home__text">
          <p className="home__pretitle">So, you want to travel to</p>
          <h1 className="home__title">Space</h1>
          <p className="home__subtitle">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          to="/destination"
          onClick={() => handleLinkClick("/destination")}
          className="home__explore-link"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Home;
