import React from 'react';

import { images } from '../../assets/images';

import './style.scss';

export function Services() {
  const { CONSTRUCTION, CARPENTRY, PLANNING } = images;
  return (
    <div className='service-wrapper'>
      <h2 className='service-wrapper__title'>We Provide Below Services.</h2>
      <div className='content'>
        <div className='service'>
          <img src={CARPENTRY} alt='carpentry' />
          <h3>Retail-Fit Out & Carpentry</h3>
          <p>Lorem ipsum dolor sit amet consect etur.</p>
        </div>
        <div className='service'>
          <img src={CONSTRUCTION} alt='construction' />
          <h3>Construction</h3>
          <p>Lorem ipsum dolor sit amet consect etur.</p>
        </div>
        <div className='service'>
          <img src={PLANNING} alt='interior planning' />
          <h3>interior & space planing</h3>
          <p>Lorem ipsum dolor sit amet consect etur.</p>
        </div>
      </div>
    </div>
  );
}
