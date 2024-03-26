'use client';

import React, { useEffect, useState } from 'react';
import styles from './slideshow.module.scss';

const Slideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.slideshow}>
      {images.map((image, idx) => (
        <div
          key={idx}
          className={`${styles.slide} ${idx === index ? styles.active : ''}`}
        >
          <img src={image.src} alt={image.alt} className={styles.slideImage} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
