import React from 'react';
import './Header.css';
import logo from '../images/logo.svg';

function Header() {
  const date = new Date().toLocaleString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__image" src={logo} alt="logo" />
        <div className="header__text">Task Organizer</div>
      </div>
      <div className="header__welcome">Bem Vindo</div>
      <div className="header__date">{ date }</div>
    </header>
  );
}

export default Header;
