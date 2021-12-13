import styled from 'styled-components';

interface ContainerProps {
  isHovering?: boolean | 0;
}

export const SpotlightContainer = styled.div<ContainerProps>`
  --animate-in-duration: 400ms;
  --animate-out-duration: 250ms;
  color: ${(props) =>
    props.isHovering ? 'var(--color-gray4)' : 'var(--color-white)'};
  animation-fill-mode: forwards;

  a {
    position: relative;
    z-index: 0;
    color: ${(props) => props.isHovering && 'var(--color-white) !important'};

    &:hover {
      z-index: 3;

      &::after {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.6;
        background-color: var(--color-dark);
        height: calc(100% + 16px);
        width: calc(100% + 24px);
        z-index: -1;
        border-radius: 8px;
      }
    }

    &.force-hover {
      z-index: 3;
      color: var(--color-white) !important;
    }
  }
  & > .video-react-fluid {
    pointer-events: none;
    object-fit: cover;
    position: fixed;
    clip-path: circle(
      var(--circleWidth, 0) at var(--cursorX, 0) var(--cursorY, 0)
    );
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    padding: 0 !important;

    & video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .video-react-poster {
      background-size: cover;
    }

    .video-react-big-play-button {
      display: none;
    }
  }
  &:after {
    content: '';
    opacity: ${(props) => (props.isHovering ? 1 : 0)};
    transition: opacity 200ms ease-in, background-size 2000ms ease-in;
    transition-delay: ${(props) =>
      props.isHovering ? 0 : 'var(--animate-out-duration)'};
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
      circle var(--circleWidthOuter) at var(--cursorX) var(--cursorY),
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 2;
  }
`;
