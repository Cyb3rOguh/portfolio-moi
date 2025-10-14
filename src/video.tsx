import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

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