import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getExperiencesInsecure } from '../../database/experiences';
import styles from './page.module.scss';

export const metadata = {
  title: 'Experiences Page',
  description: 'Discover your next Outdoor Experience',
};

export default async function ExperiencesOverview() {
  const experiences = await getExperiencesInsecure();

  return (
    <div className={styles.sectionContainer}>
      <div>
        <h1>Upcoming Experiences</h1>
      </div>
      <div>
        <div className={styles.expContainer}>
          {experiences.map((experience) => {
            return (
              <div key={`experiences-${experience.id}`}>
                <Link
                  href={`/experiences/${experience.id}`}
                  data-test-id={`experience-${experience.id}`}
                  // className={styles.experienceItem}
                >
                  <Image
                    src={experience.image}
                    width={250}
                    height={300}
                    alt={experience.title}
                    className={styles.expImage}
                  />
                  <div className={styles.expDetails}>
                    <div className={styles.headline}>
                      <h2>{experience.title}</h2>
                    </div>
                    <div>Date: {experience.workshop_date}</div>
                    <div>Time: {experience.timeframe}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
