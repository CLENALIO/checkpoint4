// eslint-disable-next-line no-shadow

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendrier({ setDate, date }) {
  const [rdvList, setRdvList] = useState([
    { date: "2023-08-06T22:00:00.000Z" },
  ]);

  useEffect(() => {
    fetch("http://localhost:8080/api/reservationByMonth")
      .then((response) => response.json())
      .then((data) => setRdvList(data))
      .catch((err) => console.error(err.status));
  }, [date]);

  const specialDates = rdvList.map((item) => item.date.split("T")[0]);

  const tileContent = ({ date: tileDate }) => {
    const dateStr = tileDate.toISOString().split("T")[0];
    const isSpecialDate = specialDates.includes(dateStr);

    return isSpecialDate ? <div className="special-date" /> : null;
  };

  return (
    <div className="calendrier">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} tileContent={tileContent} />
      </div>
    </div>
  );
}

Calendrier.propTypes = {
  setDate: PropTypes.func,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
};

Calendrier.defaultProps = {
  setDate: undefined,
  date: undefined,
};

export default Calendrier;
