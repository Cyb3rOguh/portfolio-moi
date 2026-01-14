import React, { useState, useEffect } from "react";
import "./App.css";
import Musique from "./musique.tsx";
import Video from "./video.tsx";
import Livre from "./livre.tsx";
import ToggleSwitch from "./ToggleSwitch";
import CustomCursor from "./CustomCursor";

function App() {
  const [activeSide, setActiveSide] = useState("musique");
  const [hoverToggle, setHoverToggle] = useState(false);
  const [musiqueEmblaApi, setMusiqueEmblaApi] = useState(null);
  const [videoEmblaApi, setVideoEmblaApi] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [preloadedSides, setPreloadedSides] = useState({
    musique: true,
    video: false,
    livre: false, 
  });

  // Preload the inactive side after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloadedSides({ musique: true, video: true, livre: true }); // 👈 Préchargez tout
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = (newSide) => {
    if (newSide !== activeSide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSide(newSide);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    }
  };

  return (
    <>
      {/*mon nom en haut de la page*/}
      <header className="header">
        <h1>Hugo Borel</h1>
      </header>
      <CustomCursor hoverToggle={hoverToggle} />
      {/*le big body*/}
      <div style={{ overflowX: "hidden", color: "white" }} className="App">
        {/* Active content */}
        <div
          style={{
            opacity: isTransitioning ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {activeSide === "musique" && <Musique setEmblaApi={setMusiqueEmblaApi} />}
          {activeSide === "video" && <Video setEmblaApi={setVideoEmblaApi} />}
          {activeSide === "livre" && <Livre />} {/* 👈 Affichez Livre ici */}
        </div>

        {/* Preloaded content (hidden) */}
        <div style={{ display: "none" }}>
          {preloadedSides.musique && activeSide !== "musique" && (
            <Musique setEmblaApi={() => {}} />
          )}
          {preloadedSides.video && activeSide !== "video" && (
            <Video setEmblaApi={() => {}} />
          )}
          {preloadedSides.livre && activeSide !== "livre" && (
            <Livre /> // 👈 Préchargez Livre ici
          )}
        </div>
      </div>
      {/*le menu*/}
      <footer className="footer">
        {/* 👇 Bouton "Précédent" — masqué sur "livre" */}
        {activeSide !== "livre" && (
          <button
            className="carousel-button prev"
            title="Précédent"
            onClick={() => {
              if (activeSide === "musique") musiqueEmblaApi?.scrollPrev();
              else if (activeSide === "video") videoEmblaApi?.scrollPrev();
              // 👇 Ajoutez cette ligne pour Livre (si vous avez un Embla dedans)
              // else if (activeSide === "livre") livreEmblaApi?.scrollPrev();
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/tennis.webp`}
              alt="Prev"
              style={{ width: "80px", height: "80px", transform: "scaleX(-1)" }}
            />
          </button>
        )}

        {/* 👇 ToggleSwitch — toujours visible */}
        <ToggleSwitch
          activeSide={activeSide}
          setActiveSide={handleToggle}
          setHoverToggle={setHoverToggle}
        />

        {/* 👇 Bouton "Suivant" — masqué sur "livre" */}
        {activeSide !== "livre" && (
          <button
            className="carousel-button next"
            title="Prochain"
            onClick={() => {
              if (activeSide === "musique") musiqueEmblaApi?.scrollNext();
              else if (activeSide === "video") videoEmblaApi?.scrollNext();
              // 👇 Ajoutez cette ligne pour Livre (si vous avez un Embla dedans)
              // else if (activeSide === "livre") livreEmblaApi?.scrollNext();
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/tennis.webp`}
              alt="Next"
              style={{ width: "80px", height: "80px" }}
            />
          </button>
        )}
      </footer>
    </>
  );
}

export default App;