import React from 'react'

import ConstructionImage from "../../assets/images/construct.jpeg" 

import "./style.scss"

export function Construction() {
  return (
    <div className='construction'>
        <div className='construction__left'>
                <div className='construction__left__title1'>
                    <h1 className='title-topic1'>The</h1>
                    <h1 className='title-topic2'>contstruction</h1>
                    <h1 className='title-topic3'>kings</h1>
                </div>
                <div className='construction__left__title2'>
                    <h1 className='title-topic4'>buliding up great</h1>
                    <h1 className='title-topic5'>things</h1>
                </div>
            <div className='construction__left__description'>
                <p>Buildmax Limited is a professional building, renovation and refurbishment company. We are part of the Nairobi-based Talisman Capital Group.</p>
            </div>
        </div>
        <div className='construction__right'>
            <img className='construction__right__image' src={ConstructionImage} alt="Transnational-Bank-Plaza-Paint-work-Buildmax-2.jpg" height="807px" width="1169px"/>
            <div className='construction__right__button'>Button</div>
        </div>
    </div>
  )
}
