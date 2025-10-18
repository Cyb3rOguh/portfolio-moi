import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ activeSide, setActiveSide }) => (
  <div className="toggle-container">
    <div
      className="toggle-thumb"
      style={{ left: activeSide === "musique" ? "2px" : "102px" }}
    />
    <div
      className={`toggle-option ${activeSide === "musique" ? "active" : ""}`}
      onClick={() => setActiveSide("musique")}
    >
      Musique
    </div>
    <div
      className={`toggle-option ${activeSide === "video" ? "active" : ""}`}
      onClick={() => setActiveSide("video")}
    >
      Vidéo
    </div>
  </div>
);

export default ToggleSwitch;