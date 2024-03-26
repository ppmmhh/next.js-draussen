import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LoginButton from './(auth)/login/LoginButton';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <div>
      <header className={styles.navbar}>
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li className={styles.logo}>
              <Image
                src="/../logo_wo_bg.png"
                width={60}
                height={50}
                alt="draussen Logo"
              />
            </li>
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
          <div className={styles.authButton}>
            <LoginButton />
          </div>
        </nav>
      </header>
    </div>
  );
}
