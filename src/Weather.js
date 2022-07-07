import React from "react";
import Forecast from "./Forecast";

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
          <Forecast
            icon="CLEAR_DAY"
            color="goldenrod"
            size="50"
            animate="true"
          />
        </div>
      </div>
    </div>
  );
}
