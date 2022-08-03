import React from 'react';

import { images } from '../../assets/images';

import './style.scss';

export function Gallery() {
  const { GALLERY, LARGEDOTS } = images;
  return (
    <div className='gallery-wrapper'>
      <div className='gallery-information'>
        <div className='gallery__title'>
          <h1>Our Gallery</h1>
          <p>
            <span>Quality design at the fairest price</span>
          </p>
        </div>
        <div className='gallery__description'>
          <p>
            Lorem ipsum dolor sit amet consect etur adipiscing elit sed do
            eiusmo. There are many variations.
          </p>
        </div>
      </div>
      <img className='gallery__image' src={GALLERY} alt='gallery' />
      <div className='rectangle'></div>
      <img className='dots' src={LARGEDOTS} alt='6x2 dots large' />
    </div>
  );
}
