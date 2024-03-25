import React from 'react';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './page.module.scss';

export type CookieType = {
  id: number;
  quantity: number;
};

export default function CartBadge() {
  const cookie = getCookie('cart');
  const experienceCookies = !cookie ? [] : parseJson(cookie);

  const quantity = experienceCookies?.map(
    (experienceCookie: CookieType) => experienceCookie.quantity,
  );

  const total = quantity.reduce(
    (accumulator: number, currentNumber: number) => {
      return accumulator + currentNumber;
    },
    0,
  );

  return (
    <div data-test-id="cart-count" className={styles.badge}>
      {total}
    </div>
  );
}
