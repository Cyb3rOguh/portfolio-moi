import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './video.css'; // Add custom styles for the carousel

const slides = [
  { src: '/videos/gagner.mp4', title: "gagner c'est bien perdre ca craint/Clip", year: "2025", url: "https://youtu.be/Ac3oQSA2Gv0" },
  { src: '/videos/nouvellecouleur.mp4', title: 'nouvelle couleur/Clip', year: "2025", url: "https://youtu.be/2PM2P4K1qBk?list=RD2PM2P4K1qBk" },
  { src: '/videos/oignon.mp4', title: 'le garcon oignon/Clip', year: "2025", url: "https://youtu.be/yKNas4OvNgI" },
  { src: '/videos/rodman.mp4', title: 'Rodman/Clip', year: "2022", url: "https://youtu.be/iKLNpno3WVA" },
  { src: '/videos/gentil.mp4', title: 'Studio Gentil/Dessin animé', year: "2023", url: "https://www.instagram.com/p/Cg4jiuwjgiQ/" },
];

const VideoCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })]
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
  
    const updateSlide = () => setCurrentSlide(emblaApi.selectedScrollSnap());
    emblaApi.on('select', updateSlide);
    updateSlide(); // initialize
  }, [emblaApi]);

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className="embla__slide"
              key={index}
            >
              <a href={slide.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <video
                  src={slide.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                />
                <div className="slide-info">
                  <span className="slide-title">{slide.title}</span>
                  <span className="slide-year">{slide.year}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* le titre sur mobile */}
      <div className="carousel-info-video">
        <span className="carousel-title">{slides[currentSlide].title}</span>
        <span className="carousel-year">{slides[currentSlide].year}</span>
      </div>
    </>
  );
};

export default VideoCarousel;