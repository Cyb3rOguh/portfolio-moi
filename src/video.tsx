import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './video.css';

import Autoplay from 'embla-carousel-autoplay'; //import de la fonction autoplay de embla-carousel

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            axis: 'x',
            containScroll: 'trimSnaps',
            skipSnaps: false,
            slidesToScroll: 'auto',
            align: 'start',
            dragFree: true,
        },
        [Autoplay()]
    );

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
                    <a href="https://youtu.be/Ac3oQSA2Gv0" target="_blank" rel="noopener noreferrer">
                        <video
                        className="embla__video"
                        muted
                        loop
                        autoPlay
                        >
                        <source src="/videos/gagner.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    </a>
                </div>
            
                {/* nouvelle couleur */}
                <div className="embla__slide">
                    <a href="https://youtu.be/2PM2P4K1qBk?list=RD2PM2P4K1qBk" target="_blank" rel="noopener noreferrer">
                        <video
                        className="embla__video"
                        muted
                        loop
                        autoPlay
                        >
                        <source src="/videos/nouvellecouleur.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    </a>
                </div>

                {/* oignon */}
                <div className="embla__slide">
                    <a href="https://youtu.be/yKNas4OvNgI?si=VoU3Pkg3AmjCVm6B" target="_blank" rel="noopener noreferrer">
                        <video
                        className="embla__video"
                        muted
                        loop
                        autoPlay
                        >
                        <source src="/videos/oignon.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    </a>
                </div>

                {/* rodman */}
                <div className="embla__slide">
                    <a href="https://youtu.be/yKNas4OvNgI?si=VoU3Pkg3AmjCVm6B" target="_blank" rel="noopener noreferrer">
                        <video
                        className="embla__video"
                        muted
                        loop
                        autoPlay
                        >
                        <source src="/videos/rodman.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    </a>
                </div>

                {/* studio gentil */}
                <div className="embla__slide">
                    <a href="https://www.instagram.com/p/Cg4jiuwjgiQ/" target="_blank" rel="noopener noreferrer">
                        <video
                        className="embla__video"
                        muted
                        loop
                        autoPlay
                        >
                        <source src="/videos/gentil.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;