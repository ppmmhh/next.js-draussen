'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { addToCart } from './actions';
import styles from './experiencePage.module.scss';

type Props = {
  experienceId: number;
};

export default function SetQuantityForm(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  return (
    <div>
      <form>
        <select
          value={quantity}
          onChange={(event) => setQuantity(Number(event.currentTarget.value))}
          className={styles.quantity}
          data-test-id="experience-quantity"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button
          data-test-id="experience-add-to-cart"
          formAction={async () => {
            router.refresh();
            await addToCart(props.experienceId, Number(quantity));
          }}
        >
          Be there
        </button>
      </form>
    </div>
  );
}
