import React from 'react';

import bigCircle from "../../assets/images/big circle.png"
import dots from "../../assets/images/6x6 dots.png"

import './style.scss';

export function MainPost() {
  return (
    <div className='main-post'>
      <div className='main-post__information'>
          <h1 className='main-post__information__title'>The <span className='main-post__information__title--yellow'>construction</span> kings</h1>
          <h1 className='main-post__information__title'>building up great things</h1>
          <p className='main-post__information__description'>
            Buildmax Limited is a professional building, renovation and
            refurbishment company. We are part of the Nairobi-based Talisman
            Capital Group.
          </p>
          <div className='main-post__information__description-extend'>
            <span>Read more</span>
          </div>
      </div>
      <div className='main-post__image'>
      </div>
      <div className='main-post__button'>Our Projects ➔</div>
      <img className='big-circle' src={bigCircle} alt="circle-vector" />
      <img className='dots' src={dots} alt="6x6 dots" />
    </div>
  );
}
