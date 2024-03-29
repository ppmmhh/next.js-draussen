import Link from 'next/link';
import React from 'react';
import { getExperiencesInsecure } from '../../database/experiences';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './checkoutPage.module.scss';

export default async function OrderSummary() {
  const experiences = await getExperiencesInsecure();

  // get the cookies
  const cookie = getCookie('cart');
  const experiencCookies = !cookie ? [] : parseJson(cookie);

  // check which workshops are in cookies
  const experiencesWithCookies = experiences.map((experienc) => {
    const experienceFromCookies = experiencCookies.find(
      (experiencCookie) => experienc.id === experiencCookie.id,
    );
    return { ...experienc, quantity: experienceFromCookies?.quantity };
  });

  // new variable with all products with quantity
  const experiencesInCart = experiencesWithCookies.filter(
    (experience) => experience.quantity,
  );

  const totalPrice = experiencesInCart.reduce(
    (accumulator, experience) =>
      accumulator + experience.price * experience.quantity,
    0,
  );
  return (
    <div className={styles.orderSummary}>
      <div className={styles.orderContainer}>
        <h2 className={styles.headline}>You Picked:</h2>
        <div>
          {experiencesInCart.map((experience) => {
            return (
              <div
                key={`experiences-${experience.id}`}
                data-test-id={`cart-experience-${experience.id}`}
              >
                <Link
                  href={`/experiences/${experience.id}`}
                  data-test-id={`experience-${experience.id}`}
                >
                  <div className={styles.summaryWrapper}>
                    <div className={styles.headline}>
                      <h2>{experience.title}</h2>
                    </div>
                    <div className={styles.productDetails}>
                      <div data-test-id="experience-price">
                        Price: EUR {experience.price}
                      </div>
                      <div
                        data-test-id={`cart-experience-quantity-${experience.id}`}
                      >
                        Quantity: {experience.quantity}
                      </div>
                      <div>
                        Subtotal: EUR {experience.price * experience.quantity}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.totalPrice}>
          <div data-test-id="cart-total">Total: EUR {totalPrice}</div>
        </div>
      </div>
    </div>
  );
}
