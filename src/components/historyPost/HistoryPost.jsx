import React from 'react';

import dots from '../../assets/images/6x2 dots.png';
import smallCircle from '../../assets/images/small circle.png';

import './style.scss';

export function HistoryPost() {
  return (
    <div className='history-post'>
      <div className='title'>
        <h2>Since we Started work in 1900</h2>
        <p className='title__support-text'>
          <span>Quality design at the fairest price</span>
        </p>
      </div>
      <div className='description'>
        <p>
          We have worked on some of the stunning architectural marvels within
          industries like hotels, residential buildings, offices, commercial
          buildings, food & beverage and made them great successes.
        </p>
        <p>
          We have worked on some of the stunning architectural marvels within
          industries like hotels, residential buildings, offices, commercial
          buildings, food & beverage and made them great successes.
        </p>
        <p className='description__author'>lorem ipsum</p>
      </div>
      <img className='small-circle' src={smallCircle} alt='circle-vector' />
      <img className='dots' src={dots} alt='6x2 dots' />
    </div>
  );
}
