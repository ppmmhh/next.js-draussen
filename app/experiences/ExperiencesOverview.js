import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getExperiencesInsecure } from '../../database/experiences';
import styles from './page.module.scss';

export const metadata = {
  title: 'Experiences Page',
  description: 'Discover your next Outdoor Experience',
};

export function ExperiencesOverview() {
  const [experiences, setExperiences] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetchExperiences() {
      const experiencesData = await getExperiencesInsecure();
      setExperiences(experiencesData);
      setFilteredExperiences(experiencesData);
    }
    fetchExperiences();
  }, []);

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
    if (!value) {
      setFilteredExperiences(experiences); // If filter is empty, show all experiences
    } else {
      const filtered = experiences.filter((experience) =>
        experience.title.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredExperiences(filtered);
    }
  };

  return (
    <div className={styles.sectionContainer}>
      <div>
        <h1>Upcoming Experiences</h1>
        <input
          type="text"
          placeholder="Search by title..."
          value={filter}
          onChange={handleFilterChange}
          className={styles.filterInput}
        />
      </div>
      <div>
        <div className={styles.expContainer}>
          {filteredExperiences.map((experience) => {
            return (
              <div key={`experience-${experience.id}`}>
                <Link
                  href={`/experiences/${experience.id}`}
                  data-test-id={`experience-${experience.id}`}
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
  export default ExperiencesOverview;
};
