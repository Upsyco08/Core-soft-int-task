import React from 'react'
import { links } from '../../constants';

export function Footer() {
  const { facebook } = links; 
  return (
    <div>Footer
          <a href={facebook.LINK}>{facebook.LABEL}</a>
    </div>
  )
}
