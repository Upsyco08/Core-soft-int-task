import React from 'react'

import interior from "../../assets/images/interior.png"
import windows from "../../assets/images/windows.png"
import rectangle from "../../assets/images/rectangle.png"

import "./style.scss"

export function AboutPost() {
  return (
    <div className='about'>
        <div className='about__post1'>
            <img className='about__post1__image' src={interior} alt="Buildmax Interior Design"/>
            <div className='about__post1__details'>
                <h1 className='about__post1__details__title'>Aesthetically pleasing.</h1> 
                <p className='about__post1__details__description'>We have worked on some of the stunning architectural marvels within industries like hotels, residential buildings, offices, commercial buildings, food & beverage and made them great successes.</p>
                <p className='about__post1__details__button'>Learn More</p>
            </div>
            <img className='about__post1__background' src={rectangle} alt="Rectangle Backgound"/>
        </div>
        <div className='about__post2'>
            <img className='about__post2__image' src={windows} alt="Windows Interior Design"/>
            <div className='about__post2__details'>
                <h1 className='about__post2__details__title'>Great work Ethic.</h1> 
                <p className='about__post2__details__description'>We have worked on some of the stunning architectural marvels within industries like hotels, residential buildings, offices, commercial buildings, food & beverage and made them great successes.</p>
                <p className='about__post2__details__button'>Learn More</p>
            </div>
            <img className='about__post2__background' src={rectangle} alt="Rectangle Backgound"/>
        </div>
    </div>
  )
}
