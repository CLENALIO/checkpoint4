import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Calendrier from "../components/Calendrier";

function Rdv() {
  const navigate = useNavigate();

  const [date, setDate] = useState(new Date());

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  const dateSQL = `${year}-${month}-${day}`;
  /* format mysql : AAAA-MM-JJ */

  const [dispo, setDispo] = useState(true);

  useEffect(() => {
    const convertDate = (dates) => {
      const timestamp = Date.parse(dates);
      return timestamp;
    };
    if (convertDate(date) <= Date.now()) {
      setDispo(false);
    } else {
      fetch(`http://localhost:8080/api/reservationByDate/${dateSQL}`)
        .then((response) => {
          if (response.status === 200) {
            setDispo(false);
          } else {
            setDispo(true);
          }
        })
        .catch((err) => console.error(err.status));
    }
  }, [date]);

  const [popup, setPopup] = useState("");

  const closePopUp = () => {
    if (popup === "🚀 Votre réservation a bien été effectuée") {
      navigate("/");
    } else {
      setPopup("");
    }
  };

  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeFullname = (event) => {
    setFullname(event.target.value);
  };

  const handleClick = () => {
    if (type && email && phone && fullname) {
      fetch("http://localhost:8080/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: dateSQL,
          type,
          email,
          phone,
          customername: fullname,
        }),
      })
        .then((response) => {
          if (response.status === 201) {
            setPopup("🚀 Votre réservation a bien été effectuée");
          }
        })
        .catch((err) => {
          console.error(err.status);
        });
    } else {
      setPopup("👮 Merci de bien vouloir compléter l'ensemble des champs");
    }
  };

  return (
    <div className="rdvPage">
      <Header />
      <div className="boxWithoutHeader">
        <h1>Réserver une séance</h1>
        <br />
        {!popup && (
          <div className="rdvContainer">
            <Calendrier setDate={setDate} date={date} />
            {dispo && (
              <div className="formContainer">
                <div className="date">
                  <h2>
                    Le {day} / {month} / {year} de 10h à 16h
                  </h2>
                  <br />
                </div>
                <div className="formulaire">
                  <select name="type" onChange={handleChangeType} value={type}>
                    <option value="">
                      Selectionner votre type de prestation
                    </option>
                    <option value="1">Tri et conseils</option>
                    <option value="2">
                      Optimisation des espaces et rangement
                    </option>
                  </select>
                  <br />
                  <label htmlFor="name">Votre nom</label>
                  <input
                    type="text"
                    value={fullname}
                    onChange={handleChangeFullname}
                  />
                  <label htmlFor="email">Votre email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                  <label htmlFor="phone">Votre téléphone</label>
                  <input
                    type="phone"
                    value={phone}
                    onChange={handleChangePhone}
                  />
                  <br />
                  <button
                    className="sendRdv"
                    type="button"
                    onClick={handleClick}
                  >
                    {" "}
                    Confirmer ce rendez vous
                  </button>
                </div>
              </div>
            )}
            {!dispo && (
              <div className="formContainer">
                <div className="date">
                  <h2>
                    Le {day} / {month} / {year}
                  </h2>
                  <br />
                </div>
                <h2>😯 Désolé, ce créneau n'est pas disponible</h2>
              </div>
            )}
          </div>
        )}
        {popup && (
          <div className="rdvContainer">
            <Calendrier setDate={setDate} date={date} />
            <div className="formContainer">
              <div className="date">
                <h2>
                  Le {day} / {month} / {year} de 10h à 16h
                </h2>
                <br />
              </div>
              <h2>{popup}</h2>
              <br />
              <div className="formulaire">
                <button className="ok" type="button" onClick={closePopUp}>
                  {" "}
                  Ok{" "}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rdv;
