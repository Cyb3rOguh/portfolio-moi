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
          TAPER / Livre pour enfants / Illustration et ecriture / 2026
        </span>
      </div>
      {/* Bouton à droite — maintenant un lien qui ouvre dans un nouvel onglet */}
      <a
        href="https://payhip.com/b/oqUf4"
        target="_blank"
        rel="noopener noreferrer"
        className="buy-button"
      >
        Commander
      </a>
    </div>
  );
};

export default Livre;