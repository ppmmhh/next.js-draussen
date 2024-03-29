import './globals.scss';
import Link from 'next/link';
import React from 'react';
import Header from './header';

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <footer className="footer">
        <Link href="/contact">Contact</Link>

        <div className="socials">
          <img
            src="/images/socials.png"
            height={30}
            width={125}
            alt="socials"
          />
        </div>
      </footer>
    </div>
  );
}
