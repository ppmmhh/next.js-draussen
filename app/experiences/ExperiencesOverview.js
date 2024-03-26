import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getExperiencesInsecure } from '../../database/experiencesfilter';
import ExperiencesFilter from '../components/ExperiencesFilter';
import Navbar from '../navbar';
import styles from './page.module.scss';

export const metadata = {
  title: 'Experiences Page',
  description: 'Discover your next Outdoor Experience',
};

export default async function ExperiencesPage() {
  const experiences = await getExperiencesInsecure();

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.headline}>
        <h1>Upcoming Experiences</h1>
      </div>
      <div>
        <div>
          <ExperiencesFilter />
        </div>
        <div className={styles.expContainer}>
          {experiences.map((experience) => (
            <div key={`experience-${experience.id}`}>
              <Link
                href={`/experiences/${experience.id}`}
                data-test-id={`experience-${experience.id}`}
              >
                <div className={styles.expImage}>
                  <Image
                    src={experience.image}
                    width={239}
                    height={349}
                    alt={experience.title}
                  />
                </div>
                <div className={styles.expDetails}>
                  <div className={styles.headline}>
                    <h2>{experience.title}</h2>
                  </div>
                  <div>Date: {experience.workshop_date}</div>
                  <div>Time: {experience.timeframe}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
