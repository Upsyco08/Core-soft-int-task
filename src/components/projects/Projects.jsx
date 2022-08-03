import React from 'react';
import { images } from '../../assets/images';

import './style.scss';

export function Projects() {
  const { HUB, EAC, BANK } = images;
  return (
    <div className='project-wrapper'>
      <h2 className='project__title'>Our Latest Projects</h2>
      <div className='content'>
        <div className='project'>
          <img src={HUB} alt='Laywers Hub' />
          <p>Lawyes Hub kenya</p>
        </div>
        <div className='project'>
          <img src={EAC} alt='EAC Arusha' />
          <p>E.A.C Arusha</p>
        </div>
        <div className='project'>
          <img src={BANK} alt='Transnational Bank' />
          <p>Transnational Bank</p>
        </div>
      </div>
    </div>
  );
}
