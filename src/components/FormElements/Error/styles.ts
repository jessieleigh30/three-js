import { remCalc } from '@lib/helperMethods';
import styled from 'styled-components';

export const Small = styled.p`
  position: absolute;
  bottom: ${remCalc(-25)};
  right: 0;
  font-size: ${remCalc(15)};
  font-weight: 300;
  color: ${(props) => props.theme.COLORS.INVALID_FORM_COLOR};
`;
