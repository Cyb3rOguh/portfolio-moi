import React, { useState } from "react";
import "./App.css";
import Musique from "./musique.tsx";
import Video from "./video.tsx";
import ToggleSwitch from "./ToggleSwitch";
import CustomCursor from "./CustomCursor";

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
        <button
          className="carousel-button prev"
          onClick={() => {
            if (activeSide === "musique") musiqueEmblaApi?.scrollPrev();
            else if (activeSide === "video") videoEmblaApi?.scrollPrev();
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/tennis.webp`} alt="Prev" style={{ width: "80px", height: "80px", transform: "scaleX(-1)" }}/>
        </button>

        <ToggleSwitch activeSide={activeSide} setActiveSide={setActiveSide} setHoverToggle={setHoverToggle} />

        <button
          className="carousel-button next"
          onClick={() => {
            if (activeSide === "musique") musiqueEmblaApi?.scrollNext();
            else if (activeSide === "video") videoEmblaApi?.scrollNext();
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/tennis.webp`} alt="Next" style={{ width: "80px", height: "80px" }} />
        </button>
      </footer>
    </>
  );
}

export default App;