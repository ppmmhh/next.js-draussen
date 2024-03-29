import { cache } from 'react';
import { Experience } from '../migrations/00000-createTableExperiences';
import { sql } from './connect';

export const getExperiencesInsecure = cache(async () => {
  const experiences = await sql<Experience[]>`
    SELECT
      *
    FROM
      experiences
  `;

  return experiences;
});

export const getExperienceInsecure = cache(async (id: number) => {
  const [experience] = await sql<Experience[]>`
    SELECT
      *
    FROM
      experiences
    WHERE
      id = ${id}
  `;

  return experience;
});

export const getExperiencesByCategoryInsecure = cache(async (category: string) => {
  const experiences = await sql<Experience[]>`
    SELECT
      *
    FROM
      experiences
    WHERE
      category = ${category}
  `;

  return experiences;
});
