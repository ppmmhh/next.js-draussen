import { useEffect, useState } from 'react';
import { getExperiencesInsecure } from '../../database/experiences';

export function ExperienceFilter() {
  const [experiences, setExperiences] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const experiencesData = await getExperiencesInsecure();
        setExperiences(experiencesData);
        setFilteredExperiences(experiencesData);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    }
    fetchExperiences();
  }, []);

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
    if (!value) {
      setFilteredExperiences(experiences); // If filter is empty, show all experiences
    } else {
      // Filter experiences only when experiences are available
      if (experiences.length > 0) {
        const filtered = experiences.filter((experience) =>
          experience.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredExperiences(filtered);
      }
    }
  };
