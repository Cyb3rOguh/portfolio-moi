import React from "react";
import "./Livre.css";

const Livre = () => {
  return (
    <div className="livre-container">
      {/* Conteneur pour l'image + le titre */}
      <div className="image-title-container">
        <img
          src={`${process.env.PUBLIC_URL}/taper-packshot.webp`}
          alt="Taper Packshot"
          className="centered-image"
        />
        <span className="book-title">TAPER/Livre pour enfant/Dessin et ecriture</span>
      </div>

      {/* Bouton à droite */}
      <button className="buy-button">
        Commander
      </button>
    </div>
  );
};

export default Livre;