import React from 'react';
import Image, { ImageProps } from 'next/image';
import { ImageWrapper } from './styles';

interface ImgProps extends ImageProps {
  withMobile?: boolean;
}

export const Img = ({ src, alt, withMobile = false, ...rest }: ImgProps) => {
  const _src = `/images/${src}`;
  return (
    <ImageWrapper>
      <Image
        src={_src}
        // blurDataURL={`/images/placeholders/${(src as string).replace(
        //   '.webp',
        //   '.jpg'
        // )}`}
        // placeholder="blur"
        className={withMobile ? 'desktop' : ''}
        alt={alt}
        {...rest}
      />
      {withMobile && (
        <Image
          src={`/images/${(src as string).replace('.webp', '_mobile.webp')}`}
          blurDataURL={`/images/placeholders/${(src as string).replace(
            '.webp',
            '.jpg'
          )}`}
          placeholder="blur"
          className="mobile"
          alt={`${alt} mobile`}
          {...rest}
        />
      )}
    </ImageWrapper>
  );
};
