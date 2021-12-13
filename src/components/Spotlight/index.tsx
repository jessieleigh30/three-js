import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { SpotlightContainer } from '@components/Spotlight/styles';

interface Props {
  children: React.ReactNode;
}

const SpotLight = ({ children }: Props) => {
  const [isHovering, setIsHovering] = React.useState(false);
  const [circleWidth, setCircleWidth] = React.useState(0);
  const isMounted = React.useRef<boolean>(false);

  const updateCircleWidth = React.useCallback(
    (reverse = false, count = 0, max = 25.0, duration = 40) => {
      return new Promise<void>((resolve) => {
        const step = max / duration;
        const interval = window.setInterval(() => {
          count++;
          const multiplier = reverse ? duration - count : count;
          setCircleWidth(step * multiplier);
          if (count >= duration) {
            window.clearInterval(interval);
            resolve();
          }
        });
      });
    },
    [setCircleWidth]
  );

  const onMouseMove = React.useCallback((e) => {
    try {
      const x = e.clientX || e.touches[0].clientX;
      const y = e.clientY || e.touches[0].clientY;

      document.documentElement.style.setProperty('--cursorX', x + 'px');
      document.documentElement.style.setProperty('--cursorY', y + 'px');
    } catch (e) {
      // Gracefully dismiss errors
    }
  }, []);

  React.useEffect(() => {
    if (isHovering) {
      window.addEventListener('mousemove', onMouseMove);
      updateCircleWidth();
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      if (isMounted.current) {
        updateCircleWidth(true);
      }
    }
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isHovering, isMounted]);

  React.useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, [isMounted]);

  const setHovering = useDebouncedCallback((hovering) => {
    setIsHovering(hovering);
  }, 25);

  return (
    <SpotlightContainer
      isHovering={isHovering}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        '--circleWidthOuter': `${circleWidth}vmax`,
        '--circleWidth': `${circleWidth - 1 < 0 ? 0 : circleWidth - 1}vmax`,
      }}
    >
      {children}
    </SpotlightContainer>
  );
};

export default SpotLight;
