import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './video.css'; // Add custom styles for the carousel

const VideoCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ containScroll: 'trimSnaps', align: 'start', dragFree: true, slidesToScroll: 'auto' });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">

        <div className="embla__slide">Video 1</div>
        
        <div className="embla__slide">Video 2</div>
        <div className="embla__slide">Video 3</div>
      </div>
    </div>
  );
};

export default VideoCarousel;