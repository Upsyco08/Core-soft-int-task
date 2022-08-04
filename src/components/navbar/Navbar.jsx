import React from 'react';

import { navbarLabel } from '../../constants';

import './style.scss';

export function Navbar() {
  const { HOME, ABOUT, CONTACT, SERVICES, QUOTE } = navbarLabel;

  return (
    <div className='navbar'>
      <ul>
        <a href='/'>{HOME}</a>
        <a href='/about'>{ABOUT}</a>
        <a href='/contact'>{CONTACT}</a>
        <a href='/services'>{SERVICES}</a>
        <a className='quote' href='/login'>
          {QUOTE}
        </a>
      </ul>
    </div>
  );
}
