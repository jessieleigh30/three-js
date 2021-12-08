import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  max-height: 100vh;

  .svg-wrapper {
    max-height: 500px;
    cursor: pointer;

    .animatedSvg {
      height: 100%;
    }
  }
`;

export const By = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 24px;
`;
