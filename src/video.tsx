import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './video.css'; // Add custom styles for the carousel

const VideoCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ containScroll: 'trimSnaps', align: 'start', dragFree: true, slidesToScroll: 'auto' });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">

        <div className="embla__slide">
          <video
            src="/videos/gagner.mp4"
            controls
            muted
            loop
            playsInline
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </div>
        
        
        <div className="embla__slide" style={{ width: '140px' }}>
          <video
            src="/videos/gentil.mp4"
            controls
            muted
            loop
            playsInline
            style={{ width: 'auto', height: '100%', borderRadius: '10px' }}
          />
        </div>


        <div className="embla__slide">Video 3</div>
      </div>
    </div>
  );
};

export default VideoCarousel;