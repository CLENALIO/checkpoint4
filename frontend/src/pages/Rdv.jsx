import React from "react";
import Header from "../components/Header";
import Calendrier from "../components/Calendrier";

function Rdv() {
  return (
    <div className="rdvPage">
      <Header />
      <h1>Prendre rendez vous</h1>
      <Calendrier />
    </div>
  );
}

export default Rdv;
