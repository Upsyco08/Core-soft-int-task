import React from 'react';

export function ServiceCard({
  serviceClass,
  image,
  imageDescription,
  serviceTopic,
  serviceDescription,
}) {
  return (
    <div>
      <div className={serviceClass}>
        <img src={image} alt={imageDescription} />
        <h3>{serviceTopic}</h3>
        <p>{serviceDescription}</p>
      </div>
    </div>
  );
}
