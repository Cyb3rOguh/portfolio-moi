import React, { useState } from "react";
import "./App.css";
import Musique from "./musique.tsx";
import Video from "./video.tsx";
import ToggleSwitch from "./ToggleSwitch";
import CustomCursor from "./CustomCursor";
import Buttons from './Buttons';

function App() {
  const [activeSide, setActiveSide] = useState("musique");
  const [hoverToggle, setHoverToggle] = useState(false);
  const [musiqueEmblaApi, setMusiqueEmblaApi] = useState(null);
  const [videoEmblaApi, setVideoEmblaApi] = useState(null);

  return (
    <>
      {/*mon nom en haut de la page*/}
      <header className="header">
        <h1>Hugo Borel</h1>
      </header>

      <CustomCursor hoverToggle={hoverToggle} />

      {/*le big body*/}
      <div style={{ overflowX: "hidden", color: "white" }} className="App">
        {activeSide === "musique" && <Musique setEmblaApi={setMusiqueEmblaApi} />}
        {activeSide === "video" && <Video setEmblaApi={setVideoEmblaApi} />}
      </div>

      {/*le menu*/}
      <footer className="footer">
        <ToggleSwitch activeSide={activeSide} setActiveSide={setActiveSide} setHoverToggle={setHoverToggle} />
        <Buttons
          onPrev={() => {
            if (activeSide === "musique") musiqueEmblaApi?.scrollPrev();
            else if (activeSide === "video") videoEmblaApi?.scrollPrev();
          }}
          onNext={() => {
            if (activeSide === "musique") musiqueEmblaApi?.scrollNext();
            else if (activeSide === "video") videoEmblaApi?.scrollNext();
          }}
        />
      </footer>
    </>
  );
}

export default App;