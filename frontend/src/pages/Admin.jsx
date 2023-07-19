import React from "react";
import Header from "../components/Header";
import Calendrier from "../components/Calendrier";

function Admin() {
  return (
    <div className="adminPage">
      <Header />
      <div className="boxWithoutHeader">
        <h1>Mon planning</h1>
        <Calendrier />
      </div>
    </div>
  );
}

export default Admin;
