import React from "react";
import logo from "../home-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
