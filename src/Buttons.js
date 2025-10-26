import React from 'react';
import './buttons.css';

const Buttons = ({ onNext, onPrev }) => {
  return (
    <div className="carousel-buttons">
      <button className="carousel-button prev" onClick={onPrev}>
        <img src={`${process.env.PUBLIC_URL}/tennis.webp`} alt="Prev" />
      </button>
      <button className="carousel-button next" onClick={onNext}>
        <img src={`${process.env.PUBLIC_URL}/tennis.webp`} alt="Next" />
      </button>
    </div>
  );
};

export default Buttons;