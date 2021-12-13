import round from 'lodash/round';

export const remCalc = (pixelValue: number, baseValue = 16) =>
  `${round(pixelValue / baseValue, 2)}rem`;

export const fontClamp = (
  min: number,
  max: number,
  minWidth = 375,
  maxWidth = 1440
) => {
  return `clamp(${min}px, calc(${min}px + ${
    max - min
  } * ((100vw - ${minWidth}px) / ${maxWidth - minWidth})), ${max}px)`;
};

export const letterSpacing = (
  min: number,
  max: number,
  minWidth = 375,
  maxWidth = 1440,
  steps = 5
) => {
  const spacingStep = (Math.abs(max) - Math.abs(min)) / steps;
  const breakpointStep = (maxWidth - minWidth) / steps;
  return [...Array(steps - 1)].reduce((acc, _, i) => {
    return `${acc}
      @media (min-width: ${minWidth + i * breakpointStep}px){
        letter-spacing: ${remCalc(min - i * spacingStep)};
      }
  `;
  }, `letter-spacing: ${remCalc(min)};`);
};

export const isVideo = (contentType = '') => contentType?.includes('video');

const EXTERNAL_REGEX =
  /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;

export const targetForUrl = (href?: string): string => {
  if (href) {
    const matches = href.match(EXTERNAL_REGEX);

    if (typeof window !== 'undefined') {
      return matches &&
        matches.length &&
        !href.includes(window.location.hostname)
        ? '_blank'
        : '';
    }
  }

  return '';
};

export const determineExternalLink = (href?: string): boolean | void => {
  if (href) {
    const matches = href.match(EXTERNAL_REGEX);
    if (typeof window !== 'undefined') {
      return !!(
        matches &&
        matches.length &&
        !href.includes(window.location.hostname)
      );
    }
  }
};

export const emailValidator = /\S+@\S+\.\S+/;
export const phoneValidator =
  /^(?:\+?1[-. ]?)?(?:\(?([0-9]{3})\)?[-. ]?)?([0-9]{3})[-. ]?([0-9]{4})$/;

export const formatPhone = (string: any): string => {
  const regexObj =
    /^(?:\+?1[-. ]?)?(?:\(?([0-9]{3})\)?[-. ]?)?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (regexObj.test(string)) {
    const parts = string.match(regexObj);
    let phone = '';
    if (parts[1]) {
      phone += '(' + parts[1] + ') ';
    }
    phone += parts[2] + '-' + parts[3];
    return phone;
  } else {
    //invalid phone number
    return string;
  }
};

export const toggleNoScroll = () => {
  document.body.classList.toggle('no-scroll');
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const scrollToTop = (elem: HTMLElement) =>
  elem?.scrollTo({ top: 0, behavior: 'smooth' });
