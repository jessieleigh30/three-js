import React from 'react';
import Link from 'next/link';
import WebCreativitySvg from '@components/SVGs/WebCreativity';
import LottieSvg from '@components/LottieSvg';
import { By, PageWrapper } from './styles';

const LandingPage = () => {
  const [play, setPlay] = React.useState(false);
  return (
    <PageWrapper>
      <WebCreativitySvg />

      <Link href="/projects">
        <div
          onMouseEnter={() => setPlay(true)}
          onMouseLeave={() => setPlay(false)}
          className="svg-wrapper"
        >
          <LottieSvg path={`/lottie/dev-animation.json`} play={play} loop />
        </div>
      </Link>
      <By>Powered By: The Underbelly Development Team</By>
    </PageWrapper>
  );
};

export default LandingPage;