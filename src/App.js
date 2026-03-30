import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Musique from "./musique.tsx";
import Video from "./video.tsx";
import Livre from "./livre.tsx";
import ToggleSwitch from "./ToggleSwitch";
import CustomCursor from "./CustomCursor";

function App() {
  const [hoverToggle, setHoverToggle] = useState(false);
  const [musiqueEmblaApi, setMusiqueEmblaApi] = useState(null);
  const [videoEmblaApi, setVideoEmblaApi] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [preloadedSides, setPreloadedSides] = useState({
    musique: true,
    video: false,
    livre: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

  // 👇 activeSide est déduit de l'URL (plus de conflit avec un état local)
  const activeSide = useMemo(() => {
    if (location.pathname === "/taper") return "livre";
    if (location.pathname === "/musique") return "musique";
    // Par défaut (racine "/" ou "/video"), on affiche la vidéo
    return "video";
  }, [location.pathname]);

  // Preload the inactive side after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloadedSides({ musique: true, video: true, livre: true });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = (newSide) => {
    if (newSide !== activeSide) {
      setIsTransitioning(true);
      
      // Définir le chemin en fonction de la section
      let newPath = "/"; // Défaut = Vidéo
      
      if (newSide === "livre") {
        newPath = "/taper";
      } else if (newSide === "musique") {
        newPath = "/musique";
      }
      // Si newSide === "video", newPath reste "/"

      setTimeout(() => {
        navigate(newPath);
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
          {activeSide === "video" && <Video setEmblaApi={setVideoEmblaApi} />}
          {activeSide === "musique" && <Musique setEmblaApi={setMusiqueEmblaApi} />}
          {activeSide === "livre" && <Livre />}
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
            <Livre />
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

// 👇 Envelopper App avec Router
function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;