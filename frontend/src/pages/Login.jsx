import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserConnexionContext from "../context/UserConnexionContext";

function Login() {
  const navigate = useNavigate();

  const { setUserConnected } = useContext(UserConnexionContext);

  const [popup, setPopup] = useState(null);

  const closePopUp = () => {
    setPopup(null);
  };

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const LogAdmin = () => {
    fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          setUserConnected(true);
          navigate("/admin");
        } else {
          setPopup("Email ou mot de passe incorrect");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="login">
      {!popup && (
        <div className="boxLogin">
          <div className="inputLogin">
            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleChangeEmail} />
            <br />
            <label htmlFor="password">Mot de passe</label>
            <input type="text" onChange={handleChangePassword} />
            <br />
            <button className="loginButton" type="button" onClick={LogAdmin}>
              {" "}
              Se connecter
            </button>
          </div>
        </div>
      )}
      {popup && (
        <div className="boxLogin">
          <h2>{popup}</h2>
          <button className="ok" type="button" onClick={closePopUp}>
            {" "}
            Ok
          </button>
        </div>
      )}
      <div className="notAdmin">
        <h3>Oups... Je ne suis pas administrateur</h3>
        <NavLink to="/">
          <button className="home" type="button">
            {" "}
            Retour à l'accueil
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
