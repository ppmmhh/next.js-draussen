import './header.scss';
import React from 'react';
import LoginButton from '../app/(auth)/login/LoginButton';

export default function Header() {
  return (
    <div className="sectionContainer">
      <div className="logo">
        <img src="./images/logo_wo_bg.png" alt="Logo" />
      </div>

      <div className="text">
        draussen is an outdoor community dedicated to a shared natural
        experience. Together we aim to create opportunities for meaningful
        exchange and learning through guided workshops and recreational
        activities in nature and beyond.
      </div>

      <div>
        <a className="button" href="/login">
          <LoginButton />
        </a>
      </div>

      <div className="container">
        <img src="/images/wien1.jpeg" alt="vienna postcard" />
      </div>
    </div>
  );
}
