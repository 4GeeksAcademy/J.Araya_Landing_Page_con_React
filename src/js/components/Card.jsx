import React from "react";
import propTypes from "prop-types";

const Card = (prop) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={prop.urlImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

Card.propTypes= {
    urlImage: propTypes.string
}

export default Card;
