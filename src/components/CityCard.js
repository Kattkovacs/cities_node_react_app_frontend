import React from "react";

const CityCard = (props) => {
  return (
    <div>
      <div className="col-sm">
        <div
          className={`card shadow m-3 ${
            props.selectedCountry === props.city.megyeid ? "border-success" : ""
          }`}
          onClick={props.handleClick}
          style={{ width: 18 + "rem" }}
        >
          <div className="card-header text-info">{props.city.vnev}</div>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">
              {props.city.megyenev}
            </h6>
            <a
              href={
                "https://en.wikipedia.org/wiki/" + props.city.vnev + ",_Hungary"
              }
              target="_blank"
              className="card-link"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
