import React, { useState } from 'react';
import "./Resources.css";
/**
 * details local resources for students
 * will contain 3 images of local student resources
 * The images, upon clicking them, link to the resource's
 * @returns 
 */
export default function Resources() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => prevIndex === 0 ? 2 : prevIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => prevIndex === 2 ? 0 : prevIndex + 1);
  };

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
