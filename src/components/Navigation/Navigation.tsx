import * as React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/destination">Destination</Link>
        </li>
        <li>
          <Link to="/crew">Crew</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
