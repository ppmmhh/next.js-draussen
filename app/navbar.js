import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <div>
      <header>
        <nav className={styles.navbar}>
          <img
            className={styles.logo}
            src="./images/logo_wo_bg.png"
            width={155}
            height={65}
            alt="draussen Logo"
          />

          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link href="/experiences">Experiences</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">Profile</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
          <div className="icon">
            <a href="/">
              <img
                src="./images/logout.png"
                height={20}
                width={20}
                alt="logout"
              />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
