import React, { useState } from "react";
import "./App.css";
import Musique from "./musique.tsx";
import Video from "./video.tsx";
import ToggleSwitch from "./ToggleSwitch";
import CustomCursor from "./CustomCursor";

function App() {
  const [activeSide, setActiveSide] = useState("musique");

  const [hoverToggle, setHoverToggle] = useState(false);

  return (
    <>
      {/*mon nom en haut de la page*/}
      <header className="header">
        <h1>Hugo Borel</h1>
      </header>

      <CustomCursor hoverToggle={hoverToggle} />

      {/*le big body*/}
      <body style={{ overflowX: "hidden", color: "white" }}>
        <div className="App">
          {activeSide === "musique" && <Musique />}
          {activeSide === "video" && <Video />}
        </div>
      </body>

      
      {/*le menu*/}
      <footer className="footer">
        <ToggleSwitch activeSide={activeSide} setActiveSide={setActiveSide} setHoverToggle={setHoverToggle} />
      </footer>
    </>
  );
}

export default App;