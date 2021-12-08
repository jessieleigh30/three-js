import styled from 'styled-components';

export const SVGContainer = styled.div`
  --animations: infinite normal forwards running
    breath-dd04c2da-7458-486c-9664-76ee152c246f;

  @keyframes breath-dd04c2da-7458-486c-9664-76ee152c246f {
    0% {
      animation-timing-function: cubic-bezier(0.9647, 0.2413, -0.0705, 0.7911);
      transform: scale(0.9099999999999999);
    }
    51% {
      animation-timing-function: cubic-bezier(0.9226, 0.2631, -0.0308, 0.7628);
      transform: scale(1.02994);
    }
    100% {
      transform: scale(0.9099999999999999);
    }
  }

  text {
    text-anchor: middle;
    font-size: 80px;
    opacity: 0;
  }

  svg {
    margin: auto;
    display: block;
    shape-rendering: auto;
    background: none;
  }

  .path-container {
    transform-origin: 140px 125px;
    transform: scale(1);
  }

  .path {
    transform: scale(0.91);
  }

  .path1 {
    transform-origin: -194.04px -1.85814px;
    animation: 1s linear -0.616s var(--animations);
  }

  .path2 {
    transform-origin: -126.4px 6.22186px;
    animation: 1s linear -0.572s var(--animations);
  }

  .path3 {
    transform-origin: -92.44px -3.41813px;
    animation: 1s linear -0.528s var(--animations);
  }

  .path4 {
    transform-origin: -28.24px 0.461864px;
    animation: 1s linear -0.484s var(--animations);
  }

  .path5 {
    transform-origin: 12.08px 5.86187px;
    animation: 1s linear -0.44s var(--animations);
  }

  .path6 {
    transform-origin: 42.16px 6.22186px;
    animation: 1s linear -0.396s var(--animations);
  }

  .path7 {
    transform-origin: 77.44px 6.22186px;
    animation: 1s linear -0.352s var(--animations);
  }

  .path8 {
    transform-origin: 111.44px 0.301867px;
    animation: 1s linear -0.308s var(--animations);
  }

  .path9 {
    transform-origin: 132.76px 6.22186px;
    animation: 1s linear -0.264s var(--animations);
  }

  .path10 {
    transform-origin: 136.52px -21.4981px;
    animation: 1s linear -0.22s var(--animations);
  }

  .path11 {
    transform-origin: 159.56px 6.22186px;
    animation: 1s linear -0.176s var(--animations);
  }

  .path12 {
    transform-origin: 187.4px 6.22186px;
    animation: 1s linear -0.132s var(--animations);
  }

  .path13 {
    transform-origin: 191.16px -21.4981px;
    animation: 1s linear -0.088s var(--animations);
  }

  .path14 {
    transform-origin: 211.2px 0.301867px;
    animation: 1s linear -0.044s var(--animations);
  }

  .path15 {
    transform-origin: 242px 13.2219px;
    animation: 1s linear 0s infinite normal forwards running
      breath-dd04c2da-7458-486c-9664-76ee152c246f;
  }
`;
