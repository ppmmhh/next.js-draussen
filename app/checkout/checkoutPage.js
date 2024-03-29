'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { clearCookies } from './actions';
import styles from './checkoutPage.module.scss';

export default function CheckoutPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const router = useRouter();

  return (
    <div>
      <div className={styles.form}>
        <h2 className={styles.headline}>Personal:</h2>
        <div className={styles.smallContainer}>
          <div>
            <label aria-label="First Name">
              <input
                required
                name="firstName"
                data-test-id="checkout-first-name"
                placeholder="First name*"
                value={firstName}
                className={styles.inputField}
                onChange={(event) => setFirstName(event.currentTarget.value)}
              />
            </label>
          </div>
          <div>
            <label aria-label="Last Name">
              <input
                required
                name="lastName"
                data-test-id="checkout-last-name"
                placeholder="Last name*"
                value={lastName}
                className={styles.inputField}
                onChange={(event) => setLastName(event.currentTarget.value)}
              />
            </label>
          </div>
        </div>
        <div>
          <label aria-label="Email">
            <input
              required
              name="email"
              data-test-id="checkout-email"
              placeholder="Enter your@email.com*"
              value={email}
              className={styles.inputField}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </label>
        </div>
        <div>
          <h2 className={styles.headline}>Shipping:</h2>
          <div>
            <label aria-label="Address">
              <input
                required
                name="address"
                data-test-id="checkout-address"
                placeholder="Street and Number*"
                value={address}
                className={styles.inputField}
                onChange={(event) => setAddress(event.currentTarget.value)}
              />
            </label>
          </div>
          <div>
            <label aria-label="Postal Code">
              <input
                required
                name="postalCode"
                data-test-id="checkout-postal-code"
                placeholder="Postal Code*"
                value={postalCode}
                className={styles.inputField}
                onChange={(event) => setPostalCode(event.currentTarget.value)}
              />
            </label>
          </div>
        </div>
        <div className={styles.smallContainer}>
          <div>
            <label aria-label="City">
              <input
                required
                name="city"
                data-test-id="checkout-city"
                placeholder="City*"
                value={city}
                className={styles.inputField}
                onChange={(event) => setCity(event.currentTarget.value)}
              />
            </label>
          </div>

          <div>
            <label aria-label="Country">
              <input
                required
                name="country"
                data-test-id="checkout-country"
                placeholder="Country*"
                value={country}
                className={styles.inputField}
                onChange={(event) => setCountry(event.currentTarget.value)}
              />
            </label>
          </div>
        </div>
        <div>
          <div className={styles.text}>*Required</div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            data-test-id="checkout-confirm-order"
            onClick={async () => {
              await clearCookies();
              router.refresh();
              router.push('/checkout/thankyou');
            }}
            disabled={
              firstName.length === 0 ||
              lastName.length === 0 ||
              email.length === 0 ||
              address.length === 0 ||
              city.length === 0 ||
              postalCode.length === 0 ||
              country.length === 0
            }
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
