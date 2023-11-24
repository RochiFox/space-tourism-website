import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <nav className="navigation">
      <Link
        to="/"
        className="navigation__logo-link"
        onClick={() => handleLinkClick("/")}
      >
        <button className="navigation__logo-btn" />
      </Link>
      <div className="navigation__block">
        <hr className="navigation__line" />
        <ul className="navigation__links">
          <li>
            <Link
              to="/"
              className={`navigation__link ${
                activeLink === "/" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/")}
            >
              <span className="navigation__bold-link">00</span> Home
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className={`navigation__link ${
                activeLink === "/destination" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/destination")}
            >
              <span className="navigation__bold-link">01</span> Destination
            </Link>
          </li>
          <li>
            <Link
              to="/crew"
              className={`navigation__link ${
                activeLink === "/crew" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/crew")}
            >
              <span className="navigation__bold-link">02</span> Crew
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              className={`navigation__link ${
                activeLink === "/technology" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/technology")}
            >
              <span className="navigation__bold-link">03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
