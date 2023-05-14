import React, { useState, useEffect } from 'react';

export default function ResourcesPage() {
    const images = [
        {
          image: '/images/foodpantry.png',
          link: 'https://basicneeds.calpoly.edu/foodpantry'
        },
        {
          image: '/images/frontporch.png',
          link: 'https://www.frontporchslo.org'
        },
        {
          image: '/images/healthcenter.png',
          link: 'https://chw.calpoly.edu'
        }
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      // Automatic image scrolling every 3 seconds
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="resources__wrapper">
      <h1>Resources</h1>
      <div>
        <button className="carousel-button" onClick={goToPreviousImage}>
          &#8656;
        </button>
        <a href={images[currentIndex].link}>
          <img
            src={images[currentIndex].image}
            alt={`${currentIndex + 1}`}
            className="resources-item"
          />
        </a>
        <button className="carousel-button" onClick={goToNextImage}>
          &#8658;
        </button>
        <button className="play-pause-button" onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}