import React, { useState, useEffect, useRef } from 'react';

export default function Resources() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(handleNextClick, 10000);
      return prevIndex === 0 ? 2 : prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(handleNextClick, 10000);
      return prevIndex === 2 ? 0 : prevIndex + 1;
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleNextClick, 10000);
    return () => clearInterval(intervalRef.current);
  }, [handleNextClick]);

  return (
    <>
      <div className="resources">
        <div className="resources__container">
          <div className="resources__wrapper">
            <button className="carousel-button prev" onClick={handlePrevClick}>&#8656;</button>
            <button className="carousel-button next" onClick={handleNextClick}>&#8658;</button>
            <ul className="resources__items">
              <li className={`resources__item ${activeIndex === 0 ? 'active' : ''}`}>
                <a href="https://basicneeds.calpoly.edu/foodpantry">
                  <img src="/images/foodpantry.png" alt="Food Pantry" />
                </a>
              </li>
              <li className={`resources__item ${activeIndex === 1 ? 'active' : ''}`}>
                <a href="https://www.frontporchslo.org">
                  <img src="/images/frontporch.png" alt="Front Porch" />
                </a>
              </li>
              <li className={`resources__item ${activeIndex === 2 ? 'active' : ''}`}>
                <a href="https://chw.calpoly.edu">
                  <img src="/images/healthcenter.png" alt="Cal Poly Health Center" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
