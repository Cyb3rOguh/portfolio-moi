import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './video.css';

import Autoplay from 'embla-carousel-autoplay'; //import de la fonction autoplay de embla-carousel

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    useEffect(() => {
        if (emblaApi) {
            // Embla API is ready
            console.log(emblaApi);
        }
    }, [emblaApi]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
            
                {/* gagner */}
                <div className="embla__slide"> 
                    <video
                    className="embla__video"
                    muted
                    loop
                    autoPlay
                    >
                    <source src="/videos/gagner.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
            
                {/* nouvelle couleur */}
                <div className="embla__slide"> 
                    <video
                    className="embla__video"
                    muted
                    loop
                    autoPlay
                    >
                    <source src="/videos/nouvellecouleur.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>

                {/* oignon */}
                <div className="embla__slide"> 
                    <video
                    className="embla__video"
                    muted
                    loop
                    autoPlay
                    >
                    <source src="/videos/oignon.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>

                {/* rodman */}
                <div className="embla__slide"> 
                    <video
                    className="embla__video"
                    muted
                    loop
                    autoPlay
                    >
                    <source src="/videos/rodman.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>

                {/* studio gentil */}
                <div className="embla__slide"> 
                    <video
                    className="embla__video"
                    muted
                    loop
                    autoPlay
                    >
                    <source src="/videos/gentil.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;