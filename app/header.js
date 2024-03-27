import './header.scss';
import React from 'react';
import LoginButton from '../app/(auth)/login/LoginButton';
import Slideshow from './components/slides'; // Adjust the path accordingly

const images = [
  { src: '/images/wien1.jpeg', alt: 'Vienna postcard' },
  { src: '/images/wien02.jpeg', alt: 'Vienna postcard' },
  { src: '/images/wien03.webp', alt: 'Vienna postcard' },
];

const Header = () => {
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

      {/* Include the Slideshow component and pass the images array as a prop */}
      <Slideshow images={images} />
    </div>
  );
};

export default Header;
