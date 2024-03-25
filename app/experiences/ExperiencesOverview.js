import Image from 'next/image';
import Link from 'next/link';
import ExperienceFilter from './ExperienceFilter';
import styles from './page.module.scss';

export const metadata = {
  title: 'Experiences Page',
  description: 'Discover your next Outdoor Experience',
};



  return (
    <div className={styles.sectionContainer}>
      <div>
        <h1>Upcoming Experiences</h1>
        <input
          placeholder="Search by Category"
          value={filter}
          onChange={handleFilterChange}
          className={styles.filterInput}
        />
      </div>
      <div>
        <div className={styles.expContainer}>
          {filteredExperiences.map((experience) => (
            <div key={`experience-${experience.id}`}>
              <Link
                href={`/experiences/${experience.id}`}
                data-test-id={`experience-${experience.id}`}
              >
                <div className={styles.expImage}>
                  <Image
                    src={experience.image}
                    width={250}
                    height={300}
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

export default ExperiencesOverview;
