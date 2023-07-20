import React, { useState } from "react";
import Header from "../components/Header";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const [popup, setPopup] = useState(null);

  const closePopUp = () => {
    setPopup(null);
  };

  const handleSend = () => {
    if (email && message) {
      setPopup("Votre message a bien été envoyé à Amelie");
    } else {
      setPopup("Merci de bien vouloir compléter tous les champs");
    }
  };

  return (
    <div className="contact">
      <Header />
      {!popup && (
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
            <input type="email" value={email} onChange={handleChangeEmail} />
            <label htmlFor="message">Votre message</label>
            <textarea value={message} onChange={handleChangeMessage} />
            <br />
            <button
              className="contactButton"
              type="button"
              onClick={handleSend}
            >
              {" "}
              Envoyer
            </button>
          </div>
        </div>
      )}
      {popup && (
        <div className="boxWithoutHeader">
          <h1>Me contacter</h1>
          <div className="contactInfos">
            <h2>{popup}</h2>
            <br />
            <div className="formContact">
              <button className="ok" type="button" onClick={closePopUp}>
                {" "}
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
