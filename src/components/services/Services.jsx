import React from 'react';

import { serviceCards } from '../../constants';
import { ServiceCard } from '../common/serviceCard';

import './style.scss';

export function Services() {
  return (
    <div className='service-wrapper'>
      <h2 className='service-wrapper__title'>We Provide Below Services.</h2>
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
