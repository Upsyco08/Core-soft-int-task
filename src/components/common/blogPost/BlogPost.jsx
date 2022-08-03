import React from 'react';

import { images } from '../../../assets/images';

export function BlogPost({
  image,
  imageDescription,
  blogClass,
  title,
  description,
}) {
  const { RECTANGLE } = images;

  return (
    <div className={blogClass}>
      <img className='image' src={image} alt={imageDescription} />
      <div className='details'>
        <h1 className='details__title'>{title}</h1>
        <p className='details__description'>{description}</p>
        <p className='details__button'>Learn More</p>
      </div>
      <img className='background' src={RECTANGLE} alt='Rectangle Backgound' />
    </div>
  );
}
