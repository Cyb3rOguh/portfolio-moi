import React from "react";
import "./ToggleSwitch.css";
import PropTypes from "prop-types"; // 👈 Ajoutez cette ligne

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
          type="button"
          aria-pressed={activeSide === option}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

// 👇 Validation des props
ToggleSwitch.propTypes = {
  activeSide: PropTypes.string.isRequired,
  setActiveSide: PropTypes.func.isRequired,
  setHoverToggle: PropTypes.func.isRequired,
};

export default ToggleSwitch;