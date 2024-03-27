'use client';

import React, { useState } from 'react';
import styles from './ExperiencesFilter.module.scss';

function ExperiencesFilter() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((category) => category !== value),
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/filter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ categories: selectedCategories }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error('Failed to fetch experiences');
      }

      const { experiences } = await response.json();
      console.log(experiences, 'experience');

      setSelectedCategories([]);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    }
  };

  return (
    <div className={styles.filterContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <input
            type="checkbox"
            value="Hike"
            name="Hike"
            onChange={handleCategoryChange}
            className={styles.checkField}
            checked={selectedCategories.includes('Hike')}
          />
          Hike
        </label>
        <label>
          <input
            type="checkbox"
            value="Ride"
            name="Ride"
            onChange={handleCategoryChange}
            className={styles.checkField}
            checked={selectedCategories.includes('Ride')}
          />
          Ride
        </label>
        <label>
          <input
            type="checkbox"
            value="Walk"
            name="Walk"
            onChange={handleCategoryChange}
            className={styles.checkField}
            checked={selectedCategories.includes('Walk')}
          />
          Walk
        </label>

        <button className={styles.button}>Filter</button>
      </form>
    </div>
  );
}

export default ExperiencesFilter;
