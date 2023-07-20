import React from "react";
import Header from "../components/Header";

function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="boxWithoutHeader">
        <h1>Me contacter</h1>
        <div className="contactInfos">
          <p>
            Pour plus de renseignements, modifier ou annuler un rendez vous,
            vous pouvez :
          </p>
          <br />
          <p>📱 me contacter par téléphone au 06 06 06 06 06 </p>
          <p>✉️ me transmettre votre demande via le formulaire ci-dessous</p>
        </div>
        <div className="formContact">
          <label htmlFor="email">Votre email</label>
          <input type="text" />
          <label htmlFor="message">Votre message</label>
          <textarea />
          <br />
          <button className="contactButton" type="button">
            {" "}
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
