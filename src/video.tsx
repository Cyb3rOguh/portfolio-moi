import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './video.css'; // Add custom styles for the carousel

const slides = [
  { src: '/videos/gagner.mp4' },
  { src: '/videos/nouvellecouleur.mp4', width: '860px' },
  { src: '/videos/oignon.mp4', width: '450px' },
  { src: '/videos/rodman.mp4', width: '450px' },
  { src: '/videos/gentil.mp4', width: '140px', videoStyle: { width: 'auto', height: '100%' } },
];

const VideoCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ containScroll: 'trimSnaps', align: 'start', dragFree: true, slidesToScroll: 'auto' });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div
            className="embla__slide"
            key={index}
            style={slide.width ? { width: slide.width } : undefined}
          >
            <video
              src={slide.src}
              controls
              muted
              loop
              playsInline
              style={slide.videoStyle ? slide.videoStyle : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;