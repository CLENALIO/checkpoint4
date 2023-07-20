import React from "react";
import gif from "../assets/gif.gif";
import logo from "../assets/ameliecoaching.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={gif} alt="logo" />
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <a href="/">Accueil</a>
        <a href="/rdv">Rendez vous</a>
        <a href="/contact">Contact</a>
        <a href="/login">Administrateur</a>
      </div>
    </div>
  );
}

export default Header;
