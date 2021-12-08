import * as React from 'react';
import Lottie from 'lottie-web';

interface Props {
  path: string;
  autoPlay?: boolean;
  play: boolean;
  reverseOnPause?: boolean;
  viewBox?: string;
  loop?: boolean;
}

const LottieSvg = ({
  path,
  play,
  viewBox = '',
  autoPlay = false,
  reverseOnPause = false,
  loop = false,
}: Props) => {
  const loaderRef = React.useRef<HTMLDivElement>();
  const [lottie, setLottie] = React.useState<any>();

  React.useEffect(() => {
    if (loaderRef?.current) {
      loaderRef.current.innerHTML = ''; // Remove old loader so there are not multiple renders
      const tmpLottie = Lottie.loadAnimation({
        container: loaderRef.current,
        renderer: 'svg',
        path,
        autoplay: autoPlay,
        loop,
        rendererSettings: {
          viewBoxSize: viewBox,
        },
      });
      setLottie(tmpLottie);
    }
  }, [loaderRef]);

  React.useEffect(() => {
    if (lottie && play) {
      lottie.setDirection(1);
      lottie.play();
      lottie.onLoopComplete = () => {
        lottie.setDirection(1);
        lottie.play();
        lottie.onLoopComplete = () => {
          /* no-op */
        };
      };
    }
    if (lottie && !play) {
      if (loop) {
        lottie.onLoopComplete = () => {
          lottie.pause();
          lottie.onLoopComplete = () => {
            /* no-op */
          };
        };
        return;
      }

      lottie.pause();

      if (reverseOnPause) {
        lottie.setDirection(-1);
        lottie.play();
      }
    }
  }, [lottie, play]);

  return <div ref={loaderRef} className="animatedSvg" />;
};

export default LottieSvg;
