import { CSSObject } from 'styled-components';
import { COLORS } from '@identity/colors';

export const X_LARGE_MOBILE = 108;
export const X_LARGE_DESKTOP = 120;
export const X_LARGE_DESKTOP_HD = 120;

export const LARGE_MOBILE = 54;
export const LARGE_DESKTOP = 60;
export const LARGE_DESKTOP_HD = 60;

export const MEDIUM_MOBILE = 36;
export const MEDIUM_DESKTOP = 30;
export const MEDIUM_DESKTOP_HD = 30;

export const SMALL_MOBILE = 27;
export const SMALL_DESKTOP = 20;
export const SMALL_DESKTOP_HD = 20;

export const X_SMALL_MOBILE = 15;
export const X_SMALL_DESKTOP = 15;
export const X_SMALL_DESKTOP_HD = 15;

export const NAV_HEIGHT_MOBILE = 62;
export const NAV_HEIGHT_DESKTOP = 92;
export const NAV_HEIGHT_DESKTOP_HD = 132;

/*
 * Page Layout -
 */
export const PAGE_SPACING = 7;
export const PAGE_MAX_WIDTH = 1600;

export const COLUMNS_MOBILE = 3;
export const COLUMNS_TABLET = 6;
export const COLUMNS_DESKTOP = 12;
export const COLUMNS_DESKTOP_HD = 12;
export const COLUMN_SPACING = 1;
export const COLUMN_WIDTH = (115 / PAGE_MAX_WIDTH) * 100;

/*
 * Typography styles
 */

export const FONT_FAMILY_SANS_SERIF =
  'Graphik, "Helvetica Neue", Arial, sans-serif';
export const FONT_FAMILY_SERIF = '"Courier New", monospace, serif';
export const FONT_FAMILY_BASE = FONT_FAMILY_SANS_SERIF;
export const FONT_COLOR_BASE = COLORS.FONT_COLOR;

export const FONT_COLOR_MUTED = COLORS.FONT_COLOR_MUTED;

export const FONT_WEIGHT_LIGHT = 300;
export const FONT_WEIGHT_NORMAL = 400;
export const FONT_WEIGHT_MEDIUM = 500;
export const FONT_WEIGHT_SEMI_BOLD = 600;
export const FONT_WEIGHT_BOLD = 700;

export const MEASURE = {
  SMALL: '35rem',
  MEDIUM: '45rem',
  LARGE: '50rem',
  small: '35rem',
  medium: '45rem',
  large: '50rem',
};

export const LINE_HEIGHT_BASE = 1.75;
export const FONT_WEIGHT_BASE = FONT_WEIGHT_NORMAL;

export const LINE_HEIGHT_HEADINGS = 1.32;
export const FONT_FAMILY_HEADINGS = FONT_FAMILY_BASE;
export const FONT_WEIGHT_HEADINGS = FONT_WEIGHT_SEMI_BOLD;
export const FONT_COLOR_HEADINGS = FONT_COLOR_BASE;

export const ABSOLUTE: CSSObject = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)';
export const ATransition = `color 350ms ${EASE};`;

export const TRANSITION = (
  duration = 350,
  delay = 0,
  ease = [0.23, 1, 0.32, 1]
) => ({
  ease,
  duration,
  delay,
});

export const TEXT_TRANSITION = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: TRANSITION(1000),
  },
};

export const TEXT_CONTAINER_TRANSITION = {
  visible: {
    opacity: 1,
    delayChildren: 200,
    staggerChildren: 75,
  },
};
