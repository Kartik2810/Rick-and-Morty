import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Card({ results, page }) {
  let showError;
  if (results) {
    showError = results.map((value) => {
      let { id, name, image, location, status } = value;
      return (
        <Link
          to={`${page}${id}`}
          className="col-lg-4 col-md-6 col-12 position-relative text-decoration-none"
          key={id}
        >
          <div className="card position-relative">
            <img src={image} alt="" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{name}</h3>
              <div>
                <div className="location">Last Location</div>
                <p className="card-description">{location.name}</p>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return <div className="badge tag bg-danger">{status}</div>;
            } else if (status === "Alive") {
              return <div className="badge tag bg-success">{status}</div>;
            } else {
              return <div className="badge tag bg-secondary">{status}</div>;
            }
          })()}
        </Link>
      );
    });
  } else {
    showError = "No Characters Founds :)";
  }
  return <>{showError}</>;
}

export default Card;
