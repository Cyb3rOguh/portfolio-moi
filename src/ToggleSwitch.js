import React from "react";
import "./ToggleSwitch.css";
import PropTypes from "prop-types";

const ToggleSwitch = ({ activeSide, setActiveSide, setHoverToggle }) => {
  const options = ["musique", "video", "livre"];
  const thumbWidth = 144; // 👈 Réduit de 148 → 144 pour laisser de l'espace
  const gap = 2;
  const padding = 2; // 👈 Marge interne à gauche/droite

  const activeIndex = options.indexOf(activeSide);

  // 👇 Chaque bouton = 150px → le thumb doit être centré dans 150px
  // On laisse 2px de marge de chaque côté → thumb = 144px
  const buttonWidth = 153;
  const leftPosition = activeIndex * buttonWidth + padding; // +2 pour la marge gauche

  return (
    <div className="toggle-container">
      <div
        className="toggle-thumb"
        style={{ left: `${leftPosition}px`, width: `${thumbWidth}px` }}
      />
      {options.map((option) => (
        <button
          key={option}
          className={`toggle-option ${activeSide === option ? "active" : ""}`}
          onClick={() => setActiveSide(option)}
          onMouseEnter={() => setHoverToggle(true)}
          onMouseLeave={() => setHoverToggle(false)}
          type="button"
          aria-pressed={activeSide === option}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

ToggleSwitch.propTypes = {
  activeSide: PropTypes.string.isRequired,
  setActiveSide: PropTypes.func.isRequired,
  setHoverToggle: PropTypes.func.isRequired,
};

export default ToggleSwitch;