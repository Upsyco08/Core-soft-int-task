import React from 'react';

import { ProjectPost } from '../common/projectPost';
import { projectTitle, projectPosts } from '../../constants';

import './style.scss';

export function Projects() {
  const { TITLE } = projectTitle;
  return (
    <div className='project-wrapper'>
      <h2 className='project__title'>{TITLE}</h2>
      <div className='content'>
        {projectPosts.map(
          ({ projectClass, image, imageDescription, projectName }) => (
            <ProjectPost
              key={projectClass}
              projectClass={projectClass}
              image={image}
              imageDescription={imageDescription}
              projectName={projectName}
            />
          )
        )}
      </div>
    </div>
  );
}
