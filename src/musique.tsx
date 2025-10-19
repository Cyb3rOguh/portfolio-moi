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
                    <div className="slide-info">
                      <span className="slide-title">Bebe/Album/10 titres</span>
                      <span className="slide-year">2025</span>
                    </div>
                </div>
                
                <div className="embla-musique__slide">
                    <img src="/covers/couleur.webp" alt="Another" />
                    <div className="slide-info">
                      <span className="slide-title">Nouvelle Couleur/Morceau/1 titre</span>
                      <span className="slide-year">2025</span>
                    </div>
                </div>

                <div className="embla-musique__slide">
                    <img src="/covers/gagner.webp" alt="Another" />
                    <div className="slide-info">
                      <span className="slide-title">Gagner c'est bien perdre ca craint/Morceau/1 titre</span>
                      <span className="slide-year">2025</span>
                    </div>
                </div>

                <div className="embla-musique__slide">
                    <img src="/covers/oignon.webp" alt="Another" />
                    <div className="slide-info">
                      <span className="slide-title">Le garcon oignon/morceau/1 titre</span>
                      <span className="slide-year">2025</span>
                    </div>
                </div>

                <div className="embla-musique__slide">
                    <img src="/covers/pandore.webp" alt="Another" />
                    <div className="slide-info">
                      <span className="slide-title">Pandore/EP/5 titres</span>
                      <span className="slide-year">2023</span>
                    </div>
                </div>

                <div className="embla-musique__slide">
                    <img src="/covers/morceau.webp" alt="Another" />
                    <div className="slide-info">
                      <span className="slide-title">Le grand morceau/morceau/1 titre</span>
                      <span className="slide-year">2025</span>
                    </div>
                </div>

                <div className="embla-musique__slide">
                    <img src="/covers/saturn.webp" alt="Another" />
                    <div className="slide-info">
                      <span className="slide-title">Lisa From Saturn/Album/10 titres</span>
                      <span className="slide-year">2021</span>
                    </div>
                </div>

            </div>            
        </div>
            
    );
};

export default MusiqueCarousel;