import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
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
