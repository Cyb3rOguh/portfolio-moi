import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeSide, setActiveSide] = useState("musique");

  return (
    <>
      <header style={{ position: "fixed", top: 0, width: "100%", textAlign: "center", backgroundColor: "#fff", zIndex: 1 }}>
        <h1>Hugo Borel</h1>
      </header>
      <div className="App" style={{ paddingTop: "60px" }}>
        <div className="toggle-container" style={{ display: "flex", position: "relative", width: "200px", background: "#ddd", borderRadius: "25px", cursor: "pointer" }}>
          <div
            className="toggle-thumb"
            style={{
              position: "absolute",
              top: "2px",
              left: activeSide === "musique" ? "2px" : "102px",
              width: "96px",
              height: "36px",
              background: "#4caf50",
              borderRadius: "25px",
              transition: "left 0.3s"
            }}
          />
          <div
            className="toggle-option"
            onClick={() => setActiveSide("musique")}
            style={{
              flex: 1,
              textAlign: "center",
              lineHeight: "40px",
              zIndex: 1,
              color: activeSide === "musique" ? "#fff" : "#000",
              userSelect: "none"
            }}
          >
            Musique
          </div>
          <div
            className="toggle-option"
            onClick={() => setActiveSide("video")}
            style={{
              flex: 1,
              textAlign: "center",
              lineHeight: "40px",
              zIndex: 1,
              color: activeSide === "video" ? "#fff" : "#000",
              userSelect: "none"
            }}
          >
            Vidéo
          </div>
        </div>
      </div>
    </>
  );
}

export default App;