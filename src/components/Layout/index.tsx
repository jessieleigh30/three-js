import React from 'react';
import Logo from '@components/SVGs/logo';
import { ThemeProvider } from 'styled-components';
import * as theme from '@identity/index';

import { LayoutContainer } from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <Logo width={200} height={100} />
        {children}
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
