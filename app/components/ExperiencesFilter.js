'use client';

import { useState } from 'react';

function ExperiencesFilter() {
  // State to keep track of selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to handle checkbox change
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    // Update selected categories based on checkbox change
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== value));
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct query parameter string with selected categories
    const categoriesQueryParam = selectedCategories.join(',');

    // Log to ensure handleSubmit is called
    console.log('Form submitted with selected categories:', selectedCategories);

    // Handle form submission here (e.g., pass selectedCategories to a parent component)

    // Optional: Clear selected categories after submission
    setSelectedCategories([]);
  };

  // Render checkbox form
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          value="Hike"
          onChange={handleCategoryChange}
          checked={selectedCategories.includes('Hike')}
        />
        Hike
      </label>
      <label>
        <input
          type="checkbox"
          value="Ride"
          onChange={handleCategoryChange}
          checked={selectedCategories.includes('Ride')}
        />
        Ride
      </label>
      <label>
        <input
          type="checkbox"
          value="Walk"
          onChange={handleCategoryChange}
          checked={selectedCategories.includes('Walk')}
        />
        Walk
      </label>
      {/* Add more checkboxes for additional categories */}
      <button type="submit">Apply Filter</button>
    </form>
  );
}

export default ExperiencesFilter;
