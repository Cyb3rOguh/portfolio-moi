import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ activeSide, setActiveSide, setHoverToggle }) => {
  const options = ["musique", "video", "livre"];
  const thumbWidth = 148;
  const gap = 2;

  const activeIndex = options.indexOf(activeSide);
  const leftPosition = gap + activeIndex * (thumbWidth + gap);

  return (
    <div className="toggle-container">
      <div
        className="toggle-thumb"
        style={{ left: `${leftPosition}px` }}
      />
      {options.map((option) => (
        <button
          key={option}
          className={`toggle-option ${activeSide === option ? "active" : ""}`}
          onClick={() => setActiveSide(option)}
          onMouseEnter={() => setHoverToggle(true)}
          onMouseLeave={() => setHoverToggle(false)}
          // Pour l'accessibilité : rôle et gestion du focus
          type="button"
          aria-pressed={activeSide === option}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ToggleSwitch;