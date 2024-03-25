import { cache } from 'react';
import { Experience } from '../migrations/00000-createTableExperiences';
import { sql } from './connect';

export const getExperiencesFilter = cache(async (): Promise<Experience[]> => {
  const experiences: Experience[] = await sql<Experience[]>`
    SELECT
      *
    FROM
      experiences
  `;
  return experiences;
});

// Function to fetch experiences filtered by category
export const getExperienceFilter = cache(
  async (type: string): Promise<Experience | undefined> => {
    const [experience]: Experience[] = await sql<Experience[]>`
      SELECT
        *
      FROM
        experiences
      WHERE
        category = ${category}
    `;
    return experience;
  },
);
