import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendrier() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendrier">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p>Jour : </p>
      {date.getDate()}
      <p>Mois : </p>
      {date.getMonth() + 1}
      <p>Année : </p>
      {date.getFullYear()}
    </div>
  );
}

export default Calendrier;
