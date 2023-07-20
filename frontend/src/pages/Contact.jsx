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
          Pour plus de renseignements, modifier ou annuler un rendez vous, vous
          pouvez :{" "}
        </p>
        <p>me contacter par téléphone au 06 06 06 06 06</p>
        <p>me transmettre votre demande via le formulaire</p>
        <div className="formContact">
          <label htmlFor="email">Votre email</label>
          <input type="text" />
          <label htmlFor="message">Votre message</label>
          <textarea />
        </div>
        <div className="buttonContact">
          <button className="login" type="button">
            {" "}
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
