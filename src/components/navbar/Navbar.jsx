import React from 'react';

import { navbarLabel } from '../../constants';

import './style.scss';

export function Navbar() {
  const { HOME, ABOUT, CONTACT, SERVICES, QUOTE } = navbarLabel;

  return (
    <div className='navbar'>
      <div className='navbar__right'>
        <ul>
          <li>{HOME}</li>
          <li>{ABOUT}</li>
          <li>{CONTACT}</li>
          <li>{SERVICES}</li>
          <li className='quote'>{QUOTE}</li>
        </ul>
        </div>
    </div>
  );
}

