import React from 'react';
import './buttons.css';

const Buttons = ({ onNext, onPrev }) => {
  return (
    <div className="carousel-buttons">
      <button className="carousel-button prev" onClick={onPrev}>
        ‹ Prev
      </button>
      <button className="carousel-button next" onClick={onNext}>
        Next ›
      </button>
    </div>
  );
};

export default Buttons;