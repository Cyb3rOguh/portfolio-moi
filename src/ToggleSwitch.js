import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ activeSide, setActiveSide, setHoverToggle }) => (
  <div className="toggle-container">
    <div
      className="toggle-thumb"
      style={{ left: activeSide === "musique" ? "2px" : "150px" }}
    />
    <div
      className={`toggle-option ${activeSide === "musique" ? "active" : ""}`}
      onClick={() => setActiveSide("musique")}
      onMouseEnter={() => setHoverToggle(true)}
      onMouseLeave={() => setHoverToggle(false)}
    >
      Musique
    </div>
    <div
      className={`toggle-option ${activeSide === "video" ? "active" : ""}`}
      onClick={() => setActiveSide("video")}
      onMouseEnter={() => setHoverToggle(true)}
      onMouseLeave={() => setHoverToggle(false)}
    >
      Vidéo
    </div>
  </div>
);

export default ToggleSwitch;