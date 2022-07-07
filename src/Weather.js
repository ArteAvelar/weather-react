import React from "react";

export default function Weather(props) {
  return (
    <div className="weather">
      <h2>
        Today in {props.city} <br />
        Tuesday 05.04.2022
      </h2>
      <div className="row">
        <div className="col-6">
          <div className="temperature-today">10°C /20°C</div>
        </div>
        <div className="col-2">
          <i className="fa-solid fa-sun sun"></i>
        </div>
      </div>
    </div>
  );
}
