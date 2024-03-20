import './globals.scss';
import './header.scss';
import React from 'react';

export default function Header() {
  return (
    <div className="text">
      draussen is an outdoor community dedicated to a shared natural experience.
      Together with local experts, we aim to create opportunities for meaningful
      exchange and learning through guided workshops and recreational activities
      in nature and beyond.
      <div className="container">
        <div className="image-wrapper">
          <img src="/images/wien1.jpeg" alt="vienna postcard" />
        </div>
      </div>
    </div>
  );
}
