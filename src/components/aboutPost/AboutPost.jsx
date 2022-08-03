import React from 'react';

import { BlogPost } from '../common/blogPost/BlogPost';
import { blogPosts } from '../../constants/blogs';

import './style.scss';

export function AboutPost() {
  return (
    <div className='about'>
      {blogPosts.map(
        ({ blogClass, image, imageDescription, title, description }) => (
          <BlogPost
            key={blogClass}
            image={image}
            imageDescription={imageDescription}
            blogClass={blogClass}
            title={title}
            description={description}
          />
        )
      )}
    </div>
  );
}
