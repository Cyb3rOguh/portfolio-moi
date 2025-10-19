import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './musique.css'; // Add custom styles for the carousel

const MusiqueCarousel = () => {
    const [emblaRef] = useEmblaCarousel(
        {
          loop: true,
          align: 'center',      // Centers slides, improving spacing visually
          containScroll: 'trimSnaps' // Prevents overflow alignment issues
        },
        [Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })]
      );

    return (
        <div className="embla-musique" ref={emblaRef}>

            <div className="embla-musique__container">
                
                <div className="embla-musique__slide">
                    <img src="/covers/bb.webp" alt="Zebre" />
                    <span className="slide-title">Zebre</span>
                </div>
                
                <div className="embla-musique__slide">
                    <img src="/covers/couleur.webp" alt="Another" />
                    <span className="slide-title">Couleur</span>
                </div>

                <div className="embla-musique__slide">
                    <img src="/covers/gagner.webp" alt="Another" />
                    <span className="slide-title">Gagner</span>
                </div>

                <div className="embla-musique__slide">
                    <img src="/covers/oignon.webp" alt="Another" />
                    <span className="slide-title">Oignon</span>
                </div>

                <div className="embla-musique__slide">
                    <img src="/covers/pandore.webp" alt="Another" />
                    <span className="slide-title">Pandore</span>
                </div>

                <div className="embla-musique__slide">
                    <img src="/covers/morceau.webp" alt="Another" />
                    <span className="slide-title">Morceau</span>
                </div>

                <div className="embla-musique__slide">
                    <img src="/covers/saturn.webp" alt="Another" />
                    <span className="slide-title">Saturn</span>
                </div>

            </div>            
        </div>
            
    );
};

export default MusiqueCarousel;