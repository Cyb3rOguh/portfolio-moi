import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './musique.css'; // Add custom styles for the carousel

const MusiqueCarousel = () => {
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className="embla-musique" ref={emblaRef}>

            <div className="embla-musique__container">
                
                <div className="embla-musique__slide">
                    <img src="/covers/bb.webp" alt="Zebre" />
                </div>
                
                <div className="embla-musique__slide">
                    <img src="/covers/couleur.webp" alt="Another" />
                </div>

                <div className="embla-musique__slide">
                    <img src="/covers/gagner.webp" alt="Another" />
                </div>

            </div>            
        </div>
            
    );
};

export default MusiqueCarousel;