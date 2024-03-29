import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { getExperienceInsecure } from '../../../database/experiences';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import Navbar from '../../navbar';
import styles from './experiencePage.module.scss';
import SetQuantityForm from './SetQuantityForm.tsx';

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

  const experiencesQuantity = !experiencesQuantityCookie
    ? []
    : parseJson(experiencesQuantityCookie);

  const quantitiesToDisplay = experiencesQuantity.find((experienceQuantity) => {
    return experienceQuantity.id === singleExperience.id;
  });

  return (
    <div className={styles.background}>
      <div className={styles.navbarwidth}>
        <Navbar />
      </div>
      <div className={styles.sectionContainer}>
        <h1 className={styles.h1}>{singleExperience.title}</h1>
        <div className={styles.contentBoxGrid}>
          <div>
            <div className={styles.textHighlight}>
              <div>Date: 15-05-2030{singleExperience.workshop_date}</div>
              <div>Time: {singleExperience.timeframe}</div>
              <div>Meetingpoint: {singleExperience.meetingpoint}</div>
              <div>Category: {singleExperience.category}</div>
            </div>
            <div className={styles.description}>
              {singleExperience.description}
              <br />
              <br />
              From beginners to seasoned hikers, everyone is welcome to join
              this 11km hike.
              <br />
              Whether you seek solace in the quietude of the forest or crave the
              camaraderie of like-minded souls, our group hike promises an
              experience tailored to your needs.
            </div>
            <div className={styles.bookTicketWrapper}>
              <div>{quantitiesToDisplay?.quantity}</div>
              <SetQuantityForm experienceID={singleExperience.id} />
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={singleExperience.image}
              width={450}
              height={500}
              alt={singleExperience.title}
              data-test-id="experience-image"
            />
          </div>
        </div>
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
