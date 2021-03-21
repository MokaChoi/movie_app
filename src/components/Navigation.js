import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <div className="navigation">
        <Link className="navigation_title" to="/">
          MovieApp
        </Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navigation;
