import Image from 'next/image';
import Link from 'next/link';
import { getExperiencesInsecure } from '../../database/experiences';
import ExperiencesFilter from '../components/ExperiencesFilter';
import Navbar from '../navbar';
import styles from './page.module.scss';

export const metadata = {
  title: 'Experiences',
  description: 'Discover your next Outdoor Experience',
};

export default async function ExperiencesOverview() {
  const experiences = await getExperiencesInsecure();
  // Define your filter criteria here (Filtering by categories 'Ride', 'Hike', and 'Walk')
  const filteredExperiences = experiences.filter((experience) =>
    ['Ride', 'Hike', 'Walk'].includes(experience.category),
  );

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
      <div className={styles.expFilter}>
        <ExperiencesFilter />
      </div>
      <div className={styles.expContainer}>
        {filteredExperiences.map((experience) => (
          <div key={`experience-${experience.id}`} className={styles.expItem}>
            <Link
              href={`/experiences/${experience.id}`}
              data-test-id={`experience-${experience.id}`}
            >
              <div className={styles.expContent}>
                <Image
                  src={experience.image}
                  width={229}
                  height={349}
                  alt={experience.title}
                  className={styles.expImage}
                />
                <div className={styles.expDescription}>
                  <div>Date: {experience.workshopDate}</div>
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
      <footer className={styles.footer}>
        <Link href="/contact">Contact</Link>

        <div className="socials">
          <img
            src="/images/socials.png"
            height={30}
            width={125}
            alt="socials"
          />
        </div>
      </footer>{' '}
    </div>
  );
}
