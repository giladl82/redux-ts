import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header__content">
      <h1 className="main-header__title" >Mobx + TS first project!</h1>
      <nav className="mani-header__nav">
        <NavLink exact className="main-header__link" to="/">Home</NavLink>
        <NavLink className="main-header__link" to="/tasks">Tasks</NavLink>
        <NavLink className="main-header__link" to="/contacts">Contacts</NavLink>
      </nav>
    </header>
  );
};

export default Header;
