import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import './App.css';

function App() {
  const slidesData = [
    {
      title: "Kāds ir UML diagrammas mērķis?",
      content:
        "Diagramma parāda sistēmas struktūru vai uzvedību, un tās mērķis ir palīdzēt attīstīt programmatūru.",
    },
    {
      title: "Kad izmantot UML?",
      content:
        "UML tiek izmantots programmatūras izstrādē, lai attēlotu sistēmas struktūru vai uzvedību.",
    },
    {
      title: "Kādi ir UML elementi?",
      content:
        "UML diagrammās var ietilpt objekti, aktieri, klases, sekvenču diagrammas un citi.",
    },
    {
      title: "Kā diagramma izskatītos blogā?",
      content:
        "Blogā varētu būt diagramma, kas parāda attiecības starp autoru, bloga ierakstiem un lasītājiem.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slidesData.length) % slidesData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <main className="app-container">
      <h1 className="main-title">UML Diagrammas</h1>
      <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <Slide key={index} title={slide.title} content={slide.content} />
        ))}
      </div>
      <div className="navigation">
        <button className="prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </main>
  );
}

export default App;
