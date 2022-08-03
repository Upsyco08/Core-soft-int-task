import React from 'react';

export function ProjectPost({
  projectClass,
  image,
  imageDescription,
  projectName,
}) {
  return (
    <div className={projectClass}>
      <img src={image} alt={imageDescription} />
      <p>{projectName}</p>
    </div>
  );
}
