import React from "react";
import Header from "../components/Header";

function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="boxWithoutHeader">
        <h1>Me contacter</h1>
        <br />
        <p>
          Pour plus de renseignements, modifier ou annuler un rendez vous :{" "}
        </p>
        <p>Adresse mail : amelie@gmail.com</p>
        <p>Telephone : 06 06 06 06 06</p>
      </div>
    </div>
  );
}

export default Contact;
