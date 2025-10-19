import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './video.css'; // Add custom styles for the carousel

const slides = [
  { src: '/videos/gagner.mp4', title: "gagner c'est bien perdre ca craint", year: "2025" },
  { src: '/videos/nouvellecouleur.mp4', title: 'Nouvelle Couleur', year: "2024" },
  { src: '/videos/oignon.mp4', title: 'Oignon', year: "2023" },
  { src: '/videos/rodman.mp4', title: 'Rodman', year: "2022" },
  { src: '/videos/gentil.mp4', title: 'Gentil', year: "2021" },
];

const VideoCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: true })]
  );

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div
            className="embla__slide"
            key={index}
          >
            <video
              src={slide.src}
              controls
              muted
              loop
              playsInline
              autoPlay
            />
            <div className="slide-info">
              <span className="slide-title">{slide.title}</span>
              <span className="slide-year">{slide.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;