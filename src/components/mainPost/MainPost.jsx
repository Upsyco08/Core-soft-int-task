import React from 'react';

import { mainPosts } from '../../constants/main';

import './style.scss';

export function MainPost() {
  const {
    TITLE_TEXT1,
    TITLE_TEXT2,
    TITLE_TEXT3,
    TITLE_TEXT4,
    DESCRIPTION,
    ACTION,
    MAIN_IMAGE,
    MAIN_IMAGE_DESCRIPTION,
    BUTTON_TEXT,
    CIRCLE_IMAGE,
    CIRCLE_DESCRIPTION,
    DOTS_IMAGE,
    DOTS_IMAGE_DESCRIPTION,
  } = mainPosts;
  return (
    <div className='main-post'>
      <div className='information'>
        <div className='information__title'>
          <h1>
            {TITLE_TEXT1}
            <span>{TITLE_TEXT2}</span> {TITLE_TEXT3}
          </h1>
          <h2>{TITLE_TEXT4}</h2>
        </div>
        <p className='information__description'>{DESCRIPTION}</p>
        <div className='information__action'>
          <span>{ACTION}</span>
        </div>
      </div>
      <img
        className='main-post__image'
        src={MAIN_IMAGE}
        alt={MAIN_IMAGE_DESCRIPTION}
      />
      <div className='main-post__button'>{BUTTON_TEXT}</div>
      <img className='big-circle' src={CIRCLE_IMAGE} alt={CIRCLE_DESCRIPTION} />
      <img className='dots' src={DOTS_IMAGE} alt={DOTS_IMAGE_DESCRIPTION} />
    </div>
  );
}
