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
      {/* Conteneur pour centrer le titre */}
      <div className="title-container">
        <span className="book-title">
          TAPER/Livre pour enfants/Illustration et ecriture/2026
        </span>
      </div>
      {/* Bouton à droite */}
      <button className="buy-button">
        Commander
      </button>
    </div>
  );
};

export default Livre;