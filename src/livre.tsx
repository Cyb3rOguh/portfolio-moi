import React from "react";
import "./Livre.css";

const Livre = () => {
  return (
    <div className="livre-container">
      {/* Image centrée */}
      <img
        src={`${process.env.PUBLIC_URL}/taper-packshot.webp`}
        alt="Taper Packshot"
        className="centered-image"
      />
      {/* Bouton à droite */}
      <button className="buy-button">
        Commander
      </button>
    </div>
  );
};

export default Livre;