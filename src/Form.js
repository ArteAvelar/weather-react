import React from "react";

export default function Form() {
  return (
    <div className="row form">
      <div className="col-6">
        <input
          type="search"
          placeholder="Enter a city here"
          className="input form-control"
        />
      </div>
      <div className="col-2">
        <input type="submit" value="Select city" className="btn btn-primary" />
      </div>
    </div>
  );
}
