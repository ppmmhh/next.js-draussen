import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getExperienceInsecure } from '../../../database/experiences';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
// import SetQuantityForm from './SetQuantityForm.tsx';
import styles from './experiencePage.module.scss';

export async function generateMetadata(props) {
  const singleExperience = await getExperienceInsecure(
    props.params.experienceID,
  );

  return {
    title: singleExperience?.title,
  };
}

export default async function experiencePage(props) {
  const singleExperience = await getExperienceInsecure(
    Number(props.params.experienceID),
  );

  if (!singleExperience) {
    notFound();
  }

  // get cookie and parse it
  const experiencesQuantityCookie = getCookie('quantityCookie');

  const experiencesQuantity = !experiencessQuantityCookie
    ? []
    : parseJson(experiencesQuantityCookie);

  const quantitiesToDisplay = experiencesQuantity.find((experienceQuantity) => {
    return experienceQuantity.id === singleExperience.id;
  });

  return (
    <div className={styles.sectionContainer}>
      <h1 className={styles.h1}>{singleExperience.title}</h1>
      <div className={styles.contentBoxGrid}>
        <div>
          <div className={styles.textHighlight}>
            <div>Date: {singleExperience.workshop_date}</div>
            <div>Time: {singleExperience.timeframe}</div>
          </div>
          <div className={styles.description}>
            {singleExperience.description}
          </div>
        </div>
        <div>
          <Image
            src={singleExperience.image}
            width={250}
            height={300}
            alt={singleExperience.title}
            data-test-id="experience-image"
          />
        </div>
      </div>
      <div className={styles.bookTicketWrapper}>
        <div>{quantitiesToDisplay?.quantity}</div>
        <SetQuantityForm experienceID={singleExperience.id} />
      </div>
    </div>
  );
}
