import './globals.scss';
import './header.scss';
import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="container">
        <div className="image-wrapper">
          <img src="/images/applehero1.jpeg" alt="apples" />
        </div>
        <div className="image-wrapper">
          <img src="/images/applehero2.jpeg" alt="bowl of apples" />
        </div>
      </div>
    </div>
  );
}
