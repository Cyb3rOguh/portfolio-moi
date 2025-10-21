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
                
                {/* bébé */}
                <div className="embla-musique__slide">
                  <a
                    href="https://gaajuto-bb.ch/unique"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <img src="/covers/bb.webp" alt="Zebre" />
                    <div className="slide-info">
                      <span className="slide-title">Bebe/Album/10 titres</span>
                      <span className="slide-year">2025</span>
                    </div>
                  </a>
                </div>

                {/* nouvelle couleur */}
                <div className="embla-musique__slide">
                  <a
                    href="https://gaajuto.bandcamp.com/track/nouvelle-couleur"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <img src="/covers/couleur.webp" alt="Nouvelle Couleur" />
                    <div className="slide-info">
                      <span className="slide-title">nouvelle couleur</span>
                      <span className="slide-year">2025</span>
                    </div>
                  </a>
                </div>

                {/* gagner c'est bien perdre ça craint */}
                <div className="embla-musique__slide">
                  <a
                    href="https://gaajuto.bandcamp.com/track/gagner-cest-bien-perdre-a-craint"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <img src="/covers/gagner.webp" alt="Gagner c'est bien perdre ca craint" />
                    <div className="slide-info" >
                      <span className="slide-title">Gagner c'est bien perdre ca craint</span>
                      <span className="slide-year">2025</span>
                    </div>
                  </a>
                </div>

                {/* le garçon oignon */}
                <div className="embla-musique__slide">
                  <a
                    href="https://gaajuto.bandcamp.com/track/le-gar-on-oignon"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <img src="/covers/oignon.webp" alt="Le garcon oignon" />
                    <div className="slide-info">
                      <span className="slide-title">Le garcon oignon</span>
                      <span className="slide-year">2025</span>
                    </div>
                  </a>
                </div>

                {/* Pandore */}
                <div className="embla-musique__slide">
                  <a
                    href="https://gaajuto.bandcamp.com/album/pandore"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <img src="/covers/pandore.webp" alt="Pandore" />
                    <div className="slide-info">
                      <span className="slide-title">Pandore/EP/5 titres</span>
                      <span className="slide-year">2023</span>
                    </div>
                  </a>
                </div>

                {/* le grand morçeau */}
                <div className="embla-musique__slide">
                  <a
                    href="https://gaajuto.bandcamp.com/track/le-grand-morceau"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <img src="/covers/morceau.webp" alt="Le grand morceau" />
                    <div className="slide-info">
                      <span className="slide-title">Le grand morceau</span>
                      <span className="slide-year">2025</span>
                    </div>
                  </a>
                </div>

                {/* Lisa From Saturn */}
                <div className="embla-musique__slide">
                  <a
                    href="https://gaajuto.bandcamp.com/album/lisa-from-saturn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <img src="/covers/saturn.webp" alt="Lisa From Saturn" />
                    <div className="slide-info">
                      <span className="slide-title">Lisa From Saturn/Album/10 titres</span>
                      <span className="slide-year">2021</span>
                    </div>
                  </a>
                </div>

            </div>            
        </div>
            
    );
};

export default MusiqueCarousel;