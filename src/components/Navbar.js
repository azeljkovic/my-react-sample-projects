import React from "react";
import reactLogo from "../images/react-logo.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav-logo"
           src={reactLogo}
           alt="react logo"
      />
      <h1 className="logo-title">ReactFacts</h1>
      <h1 className="title">React Course - Project 1</h1>
    </nav>
  );
}

export default Navbar;
