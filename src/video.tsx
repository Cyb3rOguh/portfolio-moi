import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './video.css'; // Add custom styles for the carousel

const slides = [
  { src: '/videos/gagner.mp4' },
  { src: '/videos/nouvellecouleur.mp4' },
  { src: '/videos/oignon.mp4' },
  { src: '/videos/rodman.mp4' },
  { src: '/videos/gentil.mp4' },
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;