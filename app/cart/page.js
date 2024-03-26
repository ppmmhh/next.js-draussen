import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getExperiencesInsecure } from '../../database/experiences';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ChangeQuantity from './ChangeQuantity';
import CheckoutButton from './CheckoutButton';
import styles from './page.module.scss';
import RemoveButton from './RemoveButton';

export const metadata = {
  title: { default: 'Cart Page' },
  description: 'all your selected experiences',
};

export default async function CartPage() {
  const experiences = await getExperiencesInsecure();

  // get the cookies
  const cookie = getCookie('cart');
  const experienceCookies = !cookie ? [] : parseJson(cookie);

  // check which experiences are in cookies
  const experiencesWithCookies = experiences.map((experience) => {
    const experienceFromCookies = experienceCookies.find(
      (experienceCookie) => experience.id === experienceCookie.id,
    );
    return { ...experience, quantity: experienceFromCookies?.quantity };
  });

  // new variable with all products with quantity
  const experiencesInCart = experiencesWithCookies.filter(
    (experience) => experience.quantity,
  );

  return (
    <div className={styles.sectionContainer}>
      <div>
        <h1>Your Cart:</h1>
      </div>
      <div className={styles.experienceContainer}>
        {experiencesInCart.map((experience) => {
          const experienceSubTotal = () => {
            return Number(experience.quantity) * Number(experience.price);
          };
          return (
            <div
              key={`experience-${experience.id}`}
              data-test-id={`cart-product-${Number(experience.id)}`}
              className={styles.experienceItem}
            >
              <Link href={`/experience/${experience.id}`}>
                <Image
                  src={experience.image}
                  width={250}
                  height={300}
                  alt={experience.title}
                  className={styles.experienceImage}
                />
              </Link>
              <div className={styles.experienceDetails}>
                <div className={styles.headline}>
                  <h2>{experience.title}</h2>
                </div>
                <div>
                  <div>Date: {experience.workshop_date}</div>
                  <div>Time: {experience.timeframe}</div>
                  <div>
                    <ChangeQuantity experience={experience} />
                  </div>
                </div>
                <div>
                  <RemoveButton experience={experience} />
                </div>
                <br />
              </div>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
      <div className={styles.line} />
      <div className={styles.buttonContainer}>
        <CheckoutButton />
      </div>
    </div>
  );
}
