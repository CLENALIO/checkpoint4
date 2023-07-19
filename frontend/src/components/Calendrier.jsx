import React from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendrier({ setDate, date }) {
  return (
    <div className="calendrier">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
}

Calendrier.propTypes = {
  setDate: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Calendrier;
