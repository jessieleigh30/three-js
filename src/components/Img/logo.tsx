import React from 'react';
import { Img } from './index';

interface Props {
  name: string;
}

const LogoImage = ({ name }: Props) => {
  return (
    <Img
      alt={`${name} logo`}
      src={`logos/${name}.png`}
      height={50}
      width={50}
      objectFit="contain"
    />
  );
};

export default LogoImage;
