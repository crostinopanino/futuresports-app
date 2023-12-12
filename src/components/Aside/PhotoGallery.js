import React from "react";
import withBackground from './withBackground';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const slides = [
    { src: "/images/futuresports-community-1.png", legend: "Photo 1", alt: "Description of Photo 1" },
    { src: "/images/futuresports-community-2.png", legend: "Photo 2", alt: "Description of Photo 2" },
    { src: "/images/futuresports-community-3.png", legend: "Photo 3", alt: "Description of Photo 3" }
];

// PhotoGallery functional component to display a carousel of images
const PhotoGallery = () => {
  return (
    <div className="PhotoGallery" id="PhotoGallery">
      <h3>PhotoGallery</h3>
      <Carousel>
        {/* Using the map function to create slides from the slides array */}
        {slides.map((slide, index) => (
          // Key helps React identify which items have changed to optimize rendering
          <div key={index}>
            <img src={slide.src} alt={slide.alt} />
            {/* Inline styling for captions/legends can be moved to CSS */}
            <p className="legend">{slide.legend}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

// Wrapping the component with an HOC to add background or shared styling
export default withBackground(PhotoGallery);