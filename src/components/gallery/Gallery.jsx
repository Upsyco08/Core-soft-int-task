import React from 'react';
import { galleryPosts } from '../../constants';

import './style.scss';

export function Gallery() {
  const {
    TITLE,
    SUPPORT_TEXT,
    DESCRIPTION,
    GALLERY,
    GALLERY_DESCRIPTION,
    LARGEDOTS,
    LARGEDOTS_DESCRIPTION,
  } = galleryPosts;
  return (
    <>
      <div className='gallery-rectangle'>
        <div className='gallery-wrapper'>
          <div className='gallery-information'>
            <div className='gallery__title'>
              <h1>{TITLE}</h1>
              <p>
                <span>{SUPPORT_TEXT}</span>
              </p>
            </div>
            <div className='gallery__description'>
              <p>{DESCRIPTION}</p>
            </div>
          </div>
          <img
            className='gallery__image'
            src={GALLERY}
            alt={GALLERY_DESCRIPTION}
          />
        </div>
        <img className='dots' src={LARGEDOTS} alt={LARGEDOTS_DESCRIPTION} />
      </div>
    </>
  );
}
