import React from 'react';
import { projectPosts } from '../../constants/projects';
import { ProjectPost } from '../common/projectPost';

import './style.scss';

export function Projects() {
  return (
    <div className='project-wrapper'>
      <h2 className='project__title'>Our Latest Projects</h2>
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
