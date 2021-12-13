import styled from 'styled-components';

interface ContainerProps {
  url?: string;
  loaded: boolean;
}

export const ClickToLoadContainer = styled.div<ContainerProps>`
  position: relative;
  display: block;
  width: 100%;
  ${(props) =>
    props.url
      ? `background-image: url("${props.url}")`
      : `background-color: rgba(0, 0, 0, 0.2)`};

  background-position: center;
  background-size: cover;

  :before {
    position: absolute;
    display: ${(props) => (props.loaded ? 'none' : 'block')};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(255, 255, 255, 0.35);
  }
`;

export const CTLContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
