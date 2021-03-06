import React from "react";
import style from "../styles/header.css";

import logo from "../images/logo.png";

const Header = props => (
  <header>
    <nav className="container">
      <img src={logo} />
    </nav>
  </header>
);

export default Header;
