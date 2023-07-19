import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Calendrier from "../components/Calendrier";

function Rdv() {
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
        .catch((err) => console.error(err));
    }
  }, [date]);

  /* const handleClick = () => {}; */

  return (
    <div className="rdvPage">
      <Header />
      <div className="boxWithoutHeader">
        <h1>Prendre rendez vous</h1>
        <br />
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
                <select name="type">
                  <option value="">
                    Selectionnez votre type de prestation
                  </option>
                  <option value="1">Tri et conseils</option>
                  <option value="2">
                    Optimisation des espaces et rangement
                  </option>
                </select>
                <br />
                <label htmlFor="name">Votre nom</label>
                <input type="text" />
                <label htmlFor="email">Votre email</label>
                <input type="email" />
                <label htmlFor="phone">Votre téléphone</label>
                <input type="number" />
                <br />
                <button className="sendRdv" type="button">
                  {" "}
                  Confirmer ce rendez vous
                </button>
              </div>
            </div>
          )}
          {!dispo && (
            <div className="formContainer">
              <h2>Désolé ce créneau n'est pas disponible</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Rdv;
