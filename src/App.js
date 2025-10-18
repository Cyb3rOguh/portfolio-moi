import React, { useState } from "react";
import "./App.css";
import Musique from "./musique.tsx";
import Video from "./video.tsx";
import ToggleSwitch from "./ToggleSwitch";

function App() {
  const [activeSide, setActiveSide] = useState("musique");

  return (
    <>
      {/*mon nom en haut de la page*/}
      <header style={{ position: "fixed", top: 0, width: "100%", textAlign: "center", zIndex: 1, color: "white" }}>
        <h1>Hugo Borel</h1>
      </header>

      {/*le big body*/}
      <body style={{ overflowX: "hidden", color: "white" }}>
        <div className="App">
          {activeSide === "musique" && <Musique />}
          {activeSide === "video" && <Video />}
        </div>
      </body>

      
      {/*le menu*/}
      <footer className="footer">
        <ToggleSwitch activeSide={activeSide} setActiveSide={setActiveSide} />
      </footer>
    </>
  );
}

export default App;