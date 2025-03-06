import { useState } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";

import "./App.css";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide7, Slide6];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const SlideComponent = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="presentation-container">
      <SlideComponent />
      <nav className="navigation">
        <button onClick={prevSlide} className="nav-button">
          ⬅ Previous
        </button>
        <button onClick={nextSlide} className="nav-button">
          Next ➡
        </button>
      </nav>
    </main>
  );
}
