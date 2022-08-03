import React from 'react';

import { historyPosts } from '../../constants';

import './style.scss';

export function HistoryPost() {
  const {
    TITLE,
    SUPPORT_TEXT,
    DESCRIPTION1,
    DESCRIPTION2,
    AUTHOR,
    DOTS_IMAGE,
    DOTS_IMAGE_DESCRIPTION,
    CIRCLE_IMAGE,
    CIRCLE_IMAGE_DESCRIPTION,
  } = historyPosts;
  return (
    <div className='history-post'>
      <div className='title'>
        <h2>{TITLE}</h2>
        <p className='title__support-text'>
          <span>{SUPPORT_TEXT}</span>
        </p>
      </div>
      <div className='description'>
        <p>{DESCRIPTION1}</p>
        <p>{DESCRIPTION2}</p>
        <p className='description__author'>{AUTHOR}</p>
      </div>
      <img
        className='small-circle'
        src={CIRCLE_IMAGE}
        alt={CIRCLE_IMAGE_DESCRIPTION}
      />
      <img className='dots' src={DOTS_IMAGE} alt={DOTS_IMAGE_DESCRIPTION} />
    </div>
  );
}
