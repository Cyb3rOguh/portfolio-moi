import React, { useEffect, useRef } from 'react';
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
                <div className="embla__slide">Slide 1</div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
            </div>
        </div>
    );
};

export default EmblaCarousel;