'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { addQuantity, reduceQuantity } from './actions.js';
import styles from './page.module.scss';

type Props = {
  experience: {
    quantity: number;
  };
};

export default function ChangeQuantity(props: Props) {
  const router = useRouter();

  return (
    <form>
      Quantity: {props.experience.quantity}
      <button
        className={styles.changeQuantityPlus}
        formAction={async () => {
          router.refresh();
          await addQuantity(props.experience);
        }}
      >
        +
      </button>
      <button
        className={styles.changeQuantityMinus}
        formAction={async () => {
          router.refresh();
          await reduceQuantity(props.experience);
        }}
      >
        -
      </button>
    </form>
  );
}
