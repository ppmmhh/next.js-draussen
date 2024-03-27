'use client';

import React, { useEffect, useState } from 'react';
import styles from './slides.module.scss';

const Slideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index to move to the next slide
      setIndex((prevIndex) =>
        prevIndex === images.length ? 0 : prevIndex + 1,
      );
    }, 2000); // Change slide every 3 seconds

    // Clear the interval when component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, [images.length]); // Re-run effect when the length of images array changes

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideContainer}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {/* Duplicate the images for endless loop */}
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            alt={image.alt}
            className={styles.slideImage}
          />
        ))}
        {images.map((image, idx) => (
          <img
            key={`duplicate-${idx}`}
            src={image.src}
            alt={image.alt}
            className={styles.slideImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
