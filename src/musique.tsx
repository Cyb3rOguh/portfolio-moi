import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './musique.css'; // Add custom styles for the carousel

const MusiqueCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
          loop: true,
          align: 'center',
          containScroll: 'trimSnaps'
        },
        [Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })]
      );

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      if (!emblaApi) return;
      const updateSlide = () => setCurrentSlide(emblaApi.selectedScrollSnap());
      emblaApi.on('select', updateSlide);
      updateSlide();
    }, [emblaApi]);

    const slides = [
      { title: 'Bebe/Album/10 titres/2025' },
      { title: 'nouvelle couleur/2025' },
      { title: "Gagner c'est bien perdre ca craint/2025" },
      { title: 'Le garcon oignon/2025' },
      { title: 'Pandore/EP/5 titres/2023' },
      { title: 'Le grand morceau/2025' },
      { title: 'Lisa From Saturn/Album/10 titres/2021' },
    ];

    return (
      <div className="embla-musique-wrapper">
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
                    <img src={process.env.PUBLIC_URL + "/covers/bb.webp"} alt="Zebre" />
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
                    <img src={process.env.PUBLIC_URL + "/covers/couleur.webp"} alt="Nouvelle Couleur" />
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
                    <img src={process.env.PUBLIC_URL + "/covers/gagner.webp"} alt="Gagner c'est bien perdre ca craint" />
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
                    <img src={process.env.PUBLIC_URL + "/covers/oignon.webp"} alt="Le garcon oignon" />
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
                    <img src={process.env.PUBLIC_URL + "/covers/pandore.webp"} alt="Pandore" />
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
                    <img src={process.env.PUBLIC_URL + "/covers/morceau.webp"} alt="Le grand morceau" />
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
                    <img src={process.env.PUBLIC_URL + "/covers/saturn.webp"} alt="Lisa From Saturn" />
                  </a>
                </div>

            </div>
        
        </div>
        <div className="carousel-info-musique">
              <span className="carousel-title">{slides[currentSlide].title}</span>
        </div>
      </div>
    );
};

export default MusiqueCarousel;