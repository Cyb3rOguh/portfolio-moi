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
                  <a
                    href="https://gaajuto-bb.ch/unique"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/covers/bb.webp" alt="Zebre" />
                    <div className="slide-info">
                      <span className="slide-title">Bebe/Album/10 titres</span>
                      <span className="slide-year">2025</span>
                    </div>
                  </a>
                </div>

                <div className="embla-musique__slide">
                  <a
                    href="https://open.spotify.com/track/1XQb5tI4uA5XfXn7Q6JkJr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/covers/couleur.webp" alt="Nouvelle Couleur" />
                    <div className="slide-info">
                      <span className="slide-title">Nouvelle Couleur/Morceau/1 titre</span>
                      <span className="slide-year">2025</span>
                    </div>
                  </a>
                </div>

                <div className="embla-musique__slide">
                  <a
                    href="https://open.spotify.com/track/7pYy7Q8G2Zg4s8v2Vn0jvE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/covers/gagner.webp" alt="Gagner c'est bien perdre ca craint" />
                    <div className="slide-info">
                      <span className="slide-title">Gagner c'est bien perdre ca craint/Morceau/1 titre</span>
                      <span className="slide-year">2025</span>
                    </div>
                  </a>
                </div>

                <div className="embla-musique__slide">
                  <a
                    href="https://open.spotify.com/track/3oR9yZ4Z5kLwK0V7q9n6jN"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/covers/oignon.webp" alt="Le garcon oignon" />
                    <div className="slide-info">
                      <span className="slide-title">Le garcon oignon/morceau/1 titre</span>
                      <span className="slide-year">2025</span>
                    </div>
                  </a>
                </div>

                <div className="embla-musique__slide">
                  <a
                    href="https://open.spotify.com/album/5q1j6uF9r9z6xU8kK7b2Yw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/covers/pandore.webp" alt="Pandore" />
                    <div className="slide-info">
                      <span className="slide-title">Pandore/EP/5 titres</span>
                      <span className="slide-year">2023</span>
                    </div>
                  </a>
                </div>

                <div className="embla-musique__slide">
                  <a
                    href="https://open.spotify.com/track/6zKQwUjB1o2Qq7S6z4BEB1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/covers/morceau.webp" alt="Le grand morceau" />
                    <div className="slide-info">
                      <span className="slide-title">Le grand morceau/morceau/1 titre</span>
                      <span className="slide-year">2025</span>
                    </div>
                  </a>
                </div>

                <div className="embla-musique__slide">
                  <a
                    href="https://open.spotify.com/album/6Q0oQwUjB1o2Qq7S6z4BEB"
                    target="_blank"
                    rel="noopener noreferrer"
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