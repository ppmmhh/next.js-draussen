'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './ExperiencesFilter.module.scss';

function ExperiencesFilter() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]); // THIS IS NEW
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
      if (!response.ok) {
        throw new Error('Failed to fetch experiences');
      }
      const { experiences } = await response.json();
      console.log(experiences, 'experience');
      setFilteredExperiences(experiences); // THIS IS NEW
      setSelectedCategories([]);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    }
  };
  return (
    <div>
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
      <div className={styles.expContainer}>
        {filteredExperiences.length > 0 &&
          filteredExperiences.map((filteredExperience) => {
            return (
              <div key={filteredExperience.id}>
                <Link
                  href={`/experiences/${filteredExperience.id}`}
                  data-test-id={`experience-${filteredExperience.id}`}
                >
                  <div className={styles.expContent}>
                    <img
                      src={filteredExperience.image}
                      width={239}
                      height={349}
                      alt={filteredExperience.title}
                      className={styles.expImage}
                    />
                    <div className={styles.expDescription}>
                      <div>Date: {filteredExperience.workshopDate}</div>
                      <div>Time: {filteredExperience.timeframe}</div>
                    </div>
                  </div>
                  <div className={styles.expHeadline}>
                    <h2>{filteredExperience.title}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default ExperiencesFilter;
