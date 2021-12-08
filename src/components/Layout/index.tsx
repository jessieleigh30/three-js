import React from 'react';
import Logo from '@components/SVGs/logo';
import { LayoutContainer } from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Logo width={200} height={100} />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
