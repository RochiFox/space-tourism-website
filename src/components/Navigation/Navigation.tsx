import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setActiveLink } from "../../redux/reducers/slice";
import { RootState } from "redux/store";
import { Link } from "react-router-dom";
import "./index.scss";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const activeLink = useSelector((state: RootState) => state.app.activeLink);

  const handleLinkClick = (path: string) => {
    dispatch(setActiveLink(path));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

      <div className="navigation__menu-block">
        <button className="navigation__burger-btn" onClick={toggleMenu}>
          <span
            className={`navigation__burger-line ${isMenuOpen ? "open" : ""}`}
          />
          <span
            className={`navigation__burger-line ${isMenuOpen ? "open" : ""}`}
          />
          <span
            className={`navigation__burger-line ${isMenuOpen ? "open" : ""}`}
          />
        </button>

        {isMenuOpen && (
          <ul className={`navigation__mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link
                to="/"
                className="navigation__menu-link"
                onClick={() => handleLinkClick("/")}
              >
                00 Home
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                className="navigation__menu-link"
                onClick={() => handleLinkClick("/destination")}
              >
                01 Destination
              </Link>
            </li>
            <li>
              <Link
                to="/crew"
                className="navigation__menu-link"
                onClick={() => handleLinkClick("/crew")}
              >
                02 Crew
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                className="navigation__menu-link"
                onClick={() => handleLinkClick("/technology")}
              >
                03 Technology
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
