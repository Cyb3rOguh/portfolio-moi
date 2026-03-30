import React from "react";
import "./ToggleSwitch.css";
import PropTypes from "prop-types";

const ToggleSwitch = ({ activeSide, setActiveSide, setHoverToggle }) => {
  const options = [
    { value: "video", label: "Vidéo", className: "toggle-button--video" },
    { value: "musique", label: "Musique", className: "toggle-button--musique" },
    { value: "livre", label: "Livre", className: "toggle-button--livre" },
  ];

  return (
    <div className="toggle-container">
      {options.map((option) => (
        <button
          key={option.value}
          className={`toggle-button ${option.className} ${activeSide === option.value ? "active" : ""}`}
          onClick={() => setActiveSide(option.value)}
          onMouseEnter={() => setHoverToggle(true)}
          onMouseLeave={() => setHoverToggle(false)}
          type="button"
          aria-pressed={activeSide === option.value}
        >
          {option.label}
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