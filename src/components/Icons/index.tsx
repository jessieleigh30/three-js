import React from 'react';
import icons from './icons';

interface Props {
  icon: keyof typeof icons;
  [key: string]: any;
}

const Icons = ({ icon, ...props }: Props) => (
  <i
    style={{ display: 'inline-block' }}
    {...props}
    dangerouslySetInnerHTML={{ __html: icons[icon] }}
  />
);

export default Icons;
