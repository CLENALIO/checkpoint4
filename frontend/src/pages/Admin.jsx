import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Calendrier from "../components/Calendrier";

function Admin() {
  const [date, setDate] = useState(new Date());

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  const dateSQL = `${year}-${month}-${day}`;
  /* format mysql : AAAA-MM-JJ */

  const [reserve, setReserve] = useState(true);
  const [off, setOff] = useState(false);

  const [type, setType] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [fullname, setFullname] = useState(null);

  const [popup, setPopup] = useState(null);

  const closePopUp = () => {
    setPopup(null);
  };

  /* GET les détails de la réservation */
  useEffect(() => {
    fetch(`http://localhost:8080/api/reservationByDate/${dateSQL}`)
      .then((response) => {
        if (response.status === 200) {
          setReserve(true);
          return response.json();
        }
        setReserve(false);
        return console.error(response.status);
      })
      .then((data) => {
        if (data.type === 3) {
          setOff(true);
        } else {
          setOff(false);
          setType(data.type);
          setEmail(data.email);
          setPhone(data.phone);
          setFullname(data.customername);
        }
      })
      .catch((err) => console.error(err));
  }, [date, popup]);

  /* DELETE la réservation */

  const handleDelete = () => {
    fetch(`http://localhost:8080/api/reservation/${dateSQL}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          setPopup("La disponibilité a bien été mise à jour");
        }
      })
      .catch((err) => console.error(err));
  };

  /* PUT les détails de la réservation
     /api/reservation/:date */

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

  const handleUpdate = () => {
    if (type && email && phone && fullname) {
      fetch(`http://localhost:8080/api/reservation/${dateSQL}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
          email,
          phone,
          customername: fullname,
        }),
      })
        .then((response) => {
          if (response.status === 204) {
            setPopup("La réservation a bien été modifiée");
          }
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    } else {
      setPopup("Merci de bien vouloir compléter l'ensemble des champs");
    }
  };

  /* ADD conges */

  const handleOff = () => {
    fetch("http://localhost:8080/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: dateSQL,
        type: 3,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          setPopup(
            "Cette journée a été supprimée du calendrier de disponibilité"
          );
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="adminPage">
      <Header />
      <div className="boxWithoutHeader">
        <h1>Mon planning</h1>
        <br />
        {!popup && (
          <div className="planningContainer">
            <Calendrier setDate={setDate} date={date} />
            {reserve && (
              <div className="detailsContainer">
                <div className="date">
                  <h2>
                    Le {day} / {month} / {year} {!off && "de 10h à 16h"}
                  </h2>
                  <br />
                </div>
                {!off && (
                  <div className="details">
                    <select
                      name="type"
                      onChange={handleChangeType}
                      value={type}
                    >
                      <option value="">
                        Selectionnez votre type de prestation
                      </option>
                      <option value="1">Tri et conseils</option>
                      <option value="2">
                        Optimisation des espaces et rangement
                      </option>
                    </select>
                    <br />
                    <label htmlFor="name">Nom du client</label>
                    <input
                      type="text"
                      onChange={handleChangeFullname}
                      value={fullname}
                    />
                    <label htmlFor="email">Email du client</label>
                    <input
                      type="email"
                      onChange={handleChangeEmail}
                      value={email}
                    />
                    <label htmlFor="phone">Telephone du client</label>
                    <input
                      type="phone"
                      onChange={handleChangePhone}
                      value={phone}
                    />
                    <br />
                    <div className="boutons">
                      <button
                        className="sendRdv"
                        type="button"
                        onClick={handleUpdate}
                      >
                        {" "}
                        Modifier ce rendez vous
                      </button>
                      <button
                        className="sendRdv"
                        type="button"
                        onClick={handleDelete}
                      >
                        {" "}
                        Supprimer ce rendez vous
                      </button>
                    </div>
                  </div>
                )}
                {off && (
                  <div className="details">
                    <h2>Journée Off</h2>
                    <br />
                    <div className="boutons">
                      <button
                        className="ok"
                        type="button"
                        onClick={handleDelete}
                      >
                        {" "}
                        Libérer cette journée
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            {!reserve && (
              <div className="detailsContainer">
                <div className="date">
                  <h2>
                    Le {day} / {month} / {year}
                  </h2>
                  <br />
                </div>
                <h2>Ce créneau est libre</h2>
                <br />
                <div className="details">
                  <div className="boutons">
                    <button className="ok" type="button" onClick={handleOff}>
                      {" "}
                      Modifier en jour Off
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {popup && (
          <div className="planningContainer">
            <Calendrier setDate={setDate} date={date} />
            <div className="detailsContainer">
              <h2>{popup}</h2>
              <br />
              <div className="details">
                <div className="boutons">
                  <button className="ok" type="button" onClick={closePopUp}>
                    {" "}
                    Ok{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
