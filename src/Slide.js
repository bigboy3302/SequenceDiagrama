import React from 'react';
import './Slide.css';

function Slide({ title, content }) {
  return (
    <div className="slide">
      <h2 className="slide-title">{title}</h2>
      <p className="slide-content">{content}</p>
    </div>
  );
}

export default Slide;
