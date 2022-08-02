import React from 'react';

import './style.scss';

export function MainPost() {
  return (
    <div className='main-post'>
      <div className='main-post__information'>
          <h1 className='main-post__information__title'>The
          <span className='main-post__information__title--yellow'>construction</span>kings building up great things</h1>
          <p className='main-post__information__description'>
            Buildmax Limited is a professional building, renovation and
            refurbishment company. We are part of the Nairobi-based Talisman
            Capital Group.
          </p>
          <div className='main-post__information__description-extend'>
            <hr className='main-post__information__description-extend__line' />
            <p>Read more</p>
          </div>
      </div>
      <div className='main-post__image'>
      </div>
      <div className='main-post__button'>Our Projects</div>
    </div>
  );
}
