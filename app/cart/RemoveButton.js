'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import removeItem from './actions.js';
import styles from './page.module.scss';

export default function RemoveButton({ experience }) {
  const router = useRouter();

  const handleRemoveItem = async () => {
    await removeItem(experience);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={handleRemoveItem}
        className={styles.removeButton}
        data-test-id={`cart-product-remove-${Number(experience.id)}`}
      >
        Remove
      </button>
    </div>
  );
}
