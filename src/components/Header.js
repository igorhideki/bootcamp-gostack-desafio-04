import React from 'react';

import './Header.css';
import facebookLogo from '../assets/facebook-1.png';
import profile from '../assets/profile.jpg';

function Header() {
  return (
    <nav className="navbar">
      <img src={facebookLogo} alt="logo facebook" className="navbar__logo" />
      <a className="navbar__account">
        <span>Meu perfil</span>
        <img src={profile} alt="minha foto" className="navbar__photo" />
      </a>
    </nav>
  );
}

export default Header;
