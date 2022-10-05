import React from 'react';

function Header() {
  return (
    <div className='header'>
      <nav className='header__nav nav'>
        <ul className='nav__list'>
          <li className='nav__item'>Main</li>
          <li className='nav__item'>Content</li>
          <li className='nav__item'>Info</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
