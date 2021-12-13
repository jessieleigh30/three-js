import React from 'react';
import { ClickToLoadContainer, CTLContent } from './styles';

interface Props {
  height: number;
  children: React.ReactNode;
  img?: string;
}

const ClickToLoad = ({ height, children, img }: Props) => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <ClickToLoadContainer style={{ height }} url={img} loaded={loaded}>
      {!loaded ? (
        <CTLContent onClick={() => setLoaded(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 59 59"
            height={59}
            width={59}
          >
            <path
              d="M29.5 59C13.2 59 0 45.8 0 29.5S13.2 0 29.5 0 59 13.2 59 29.5 45.8 59 29.5 59zm0-58C13.8 1 1 13.8 1 29.5S13.8 58 29.5 58 58 45.2 58 29.5 45.2 1 29.5 1z"
              fill="#000"
            />
            <path
              d="M42.1 29.5c0 .2-.1.3-.2.4L23.2 45c-.1.1-.2.1-.3.1-.1 0-.2 0-.2-.1-.2-.1-.3-.3-.3-.5V14.4c0-.2.1-.4.3-.5.2-.1.4-.1.6.1L42 29.1c.1.1.1.2.1.4z"
              fill="#000"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          <p>Click to load</p>
        </CTLContent>
      ) : (
        children
      )}
    </ClickToLoadContainer>
  );
};

export default ClickToLoad;
