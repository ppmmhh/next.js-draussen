import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getExperiencesInsecure } from '../../database/experiences';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import Navbar from '../navbar';
import ChangeQuantity from './ChangeQuantity.tsx';
import styles from './page.module.scss';
import RemoveButton from './RemoveButton';

export const metadata = {
  title: { default: 'Cart' },
  description: 'This page is showing your cart',
};

export default async function CartPage() {
  const experiences = await getExperiencesInsecure();

  // get the cookies
  const cookie = getCookie('cart');
  const experienceCookies = !cookie ? [] : parseJson(cookie);

  // check which workshops are in cookies
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

  const totalPrice = experiencesInCart.reduce(
    (accumulator, experience) =>
      accumulator + experience.price * experience.quantity,
    0,
  );

  return (
    <div>
      <Navbar />

      <div className={styles.sectionContainer}>
        <div>
          <h1>Your Cart:</h1>
        </div>
        <div className={styles.productContainer}>
          {experiencesInCart.map((experience) => {
            const experienceSubTotal = () => {
              return Number(experience.quantity) * Number(experience.price);
            };
            return (
              <div
                key={`experiences-${experience.id}`}
                data-test-id={`cart-experience-${Number(experience.id)}`}
                className={styles.productItem}
              >
                <Link href={`/experiences/${experience.id}`}>
                  <Image
                    src={experience.image}
                    width={250}
                    height={250}
                    alt={experience.title}
                    className={styles.productImage}
                  />
                </Link>
                <div className={styles.productDetails}>
                  <div className={styles.headline}>
                    <h2>{experience.title}</h2>
                  </div>
                  <div>
                    <div data-test-id="experience-price">
                      Price: EUR {experience.price}
                    </div>
                    <div>
                      <ChangeQuantity experience={experience} />
                    </div>
                    <div>Subtotal: EUR {experienceSubTotal()}</div>
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
        <div className={styles.sectionCheckout}>
          <div className={styles.totalPrice}>
            Total: EUR <span data-test-id="cart-total">{totalPrice}</span>
          </div>
          <div>
            <Link
              href="/checkout"
              type="button"
              data-test-id="cart-checkout"
              className={styles.checkoutButton}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
