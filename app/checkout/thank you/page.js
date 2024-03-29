import React from 'react';
import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you',
  description: 'This page confirms your attendacne',
};

export default function thankYouPage() {
  return (
    <main className={styles.sectionContainer}>
      <h1>Thank you!</h1>
      <div className={styles.thankyouText}>
        We can't wait to see you draussen!
      </div>
    </main>
  );
}
