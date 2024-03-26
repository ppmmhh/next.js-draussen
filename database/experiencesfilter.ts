import { cache } from 'react';
import { sql } from './connect';

export const getExperiencesInsecure = cache(async (selectedCategories = []) => {
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
  const experiences = await sql(query, ...selectedCategories);

  return experiences;
});
