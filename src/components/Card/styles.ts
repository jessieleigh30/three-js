import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid var(--color-gray);
  border-radius: 10px;
  padding: 12px;
  height: 100%;
  color: var(--color-black);

  h3 {
    font-size: var(--txt-24-40);
    margin-top: 0;
    text-align: center;
  }

  h4 {
    font-size: var(--txt-18-20);
    color: var(--color-green);
    text-align: center;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  :hover {
    box-shadow: var(--elevation1);
  }
`;

const IMAGE_GRID = css`
  display: flex;
  justify-content: space-evenly;
`;

export const TechGrid = styled.div`
  ${IMAGE_GRID};
`;

export const HostSection = styled.div`
  ${IMAGE_GRID};
`;

export const CMSSection = styled.div`
  ${IMAGE_GRID};
`;

export const OtherLinks = styled.div``;
