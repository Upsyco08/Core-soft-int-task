import React from 'react';
import { images } from '../../assets/images';

import { footerTitle, links, navbarLabel } from '../../constants';

import './style.scss';

export function Footer() {
  const { facebook, twitter, instagram, videocam } = links;
  const { FACEBOOKICON, TWITTERICON, INSTAGRAMICON, VIDEOCAMICON } = images;
  const { HOME, ABOUT, CONTACT, SERVICES } = navbarLabel;
  const {
    ABOUT_COMPANY,
    ABOUT_DESCRIPTION,
    NEWSLETTER,
    OFFERS,
    FOLLOW_US,
    COPYRIGHT,
  } = footerTitle;

  return (
    <div className='footer-wrapper'>
      <div className='footer'>
        <div className='footer__about'>
          <h1>{ABOUT_COMPANY}</h1>
          <p>
            <span>{ABOUT_DESCRIPTION}</span>
          </p>
        </div>
        <div className='footer__input'>
          <h1>{NEWSLETTER}</h1>
          <p>{OFFERS}</p>
          <form className='form'>
            <input type='email' email='email' value='your.address@email.com' />
            <input type='submit' value='Subscribe' />
          </form>
        </div>
        <div className='footer__links'>
          <h1>{FOLLOW_US}</h1>
          <div className='link-group'>
            <div className='link'>
              <img src={FACEBOOKICON} alt='facebook' />
              <a href={facebook.LINK}>{facebook.LABEL}</a>
            </div>
            <div className='link'>
              <img src={TWITTERICON} alt='twitter' />
              <a href={twitter.LINK}>{twitter.LABEL}</a>
            </div>
            <div className='link'>
              <img src={INSTAGRAMICON} alt='instagram' />
              <a href={instagram.LINK}>{instagram.LABEL}</a>
            </div>
            <div className='link'>
              <img src={VIDEOCAMICON} alt='videocam' />
              <a href={videocam.LINK}>{videocam.LABEL}</a>
            </div>
          </div>
        </div>
      </div>

      <p className='footer-copyright'>{COPYRIGHT}</p>
      <div className='footer-navigation'>
        <ul>
          <a href='/'>{HOME}</a>
          <a href='/about'>{ABOUT}</a>
          <a href='/contact'>{CONTACT}</a>
          <a href='/services'>{SERVICES}</a>
        </ul>
      </div>
    </div>
  );
}
