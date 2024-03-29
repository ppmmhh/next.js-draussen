import React from 'react';
import Navbar from '../navbar';
import CheckoutPage from './checkoutPage';
import styles from './checkoutPage.module.scss';
import OrderSummary from './orderSummary';

export default function checkout() {
  return (
    <div>
      <Navbar />
      <div className={styles.pageContainer}>
        <CheckoutPage />
        <OrderSummary />
      </div>
    </div>
  );
}
