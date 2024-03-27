import Image from 'next/image';
import Link from 'next/link';
import { getExperiencesInsecure } from '../../database/experiences';
import ExperiencesFilter from '../components/ExperiencesFilter';
import Navbar from '../navbar';
import styles from './page.module.scss';

export const metadata = {
  title: 'Experiences Page',
  description: 'Discover your next Outdoor Experience',
};

export default async function ExperiencesOverview() {
  const experiences = await getExperiencesInsecure();

  return (
    <div>
      <Navbar />

      <div className={styles.introtext}>
        <p>
          Immerse yourself in our carefully curated outdoor experiences and
          recreational workshops designed to reconnect with the natural world,
          embrace personal growth, and find meaningful connection within a
          community of like-minded nature enthusiasts. Embark on a journey of
          learning and exploration to discover something new and cultivate your
          own natural practice, no matter your experience level.
        </p>
      </div>
      <div className={styles.headline}>
        <h1>Upcoming Experiences</h1>
      </div>
      <div>
        <ExperiencesFilter />
      </div>
      <div className={styles.expContainer}>
        {experiences.map((experience) => (
          <div key={`experience-${experience.id}`} className={styles.expItem}>
            <Link
              href={`/experiences/${experience.id}`}
              data-test-id={`experience-${experience.id}`}
            >
              <div className={styles.expContent}>
                <Image
                  src={experience.image}
                  width={239}
                  height={349}
                  alt={experience.title}
                  className={styles.expImage}
                />
                <div className={styles.expDescription}>
                  <div>Date: 15-05-2030{experience.workshop_date}</div>
                  <div>Time: {experience.timeframe}</div>
                </div>
              </div>
              <div className={styles.expHeadline}>
                <h2>{experience.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
