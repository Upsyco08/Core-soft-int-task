import React from 'react';

import { ServiceCard } from '../common/serviceCard';
import { serviceCards, serviceTitle } from '../../constants';

import './style.scss';

export function Services() {
  const { TITLE } = serviceTitle;
  return (
    <div className='service-wrapper'>
      <h2 className='service-wrapper__title'>{TITLE}</h2>
      <div className='content'>
        {serviceCards.map(
          ({
            serviceClass,
            image,
            imageDescription,
            serviceTopic,
            serviceDescription,
          }) => (
            <ServiceCard
              key={serviceClass}
              serviceClass={serviceClass}
              image={image}
              imageDescription={imageDescription}
              serviceTopic={serviceTopic}
              serviceDescription={serviceDescription}
            />
          )
        )}
      </div>
    </div>
  );
}
