import React from 'react'

import dots from "../../assets/images/6x2 dots.png"
import smallCircle from "../../assets/images/small circle.png"

import "./style.scss"

export function HistoryPost() {
  return (
    <div className='history-post'>
        <h2 className='history-post__title'>Since we Started</h2>
        <h2 className='history-post__title'>work in 1900</h2>
        <p className='history-post__support-text'><span>Quality design at the fairest price</span></p>
        <p className='history-post__description--upper'>We have worked on some of the stunning architectural marvels within industries like hotels, residential buildings, offices, commercial buildings, food & beverage and made them great successes.</p>
        <p className='history-post__description--lower'>We have worked on some of the stunning architectural marvels within industries like hotels, residential buildings, offices, commercial buildings, food & beverage and made them great successes.</p>
        <p className='history-post__author'>lorem ipsum</p>
        <img className='small-circle' src={smallCircle} alt="circle-vector" />
        <img className='dots' src={dots} alt="6x2 dots"/>
    </div>
  )
}
