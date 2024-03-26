import { cache } from 'react';
import { sql } from './connect';

export const getExperiencesFilteredInsecure = cache(
  async (selectedCategories = []) => {
    let query = `
    SELECT
      *
    FROM
      experiences
  `;

    // If selectedCategories is provided, add a WHERE clause to filter experiences
    if (selectedCategories.length > 0) {
      query += `
      WHERE
        category IN (${selectedCategories.map((_, index) => `$${index + 1}`).join(', ')})
    `;
    }

    // Execute the SQL query using parameterized queries
    try {
      // Wrap sql`` tagged template function to call `noStore()` from next/cache before each database query
      const experiences = await sql(query, ...selectedCategories);
      return experiences;
    } catch (error) {
      console.error('Error fetching experiences:', error);
      return []; // Return empty array in case of error
    }
  },
);
