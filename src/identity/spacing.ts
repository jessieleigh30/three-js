import { remCalc } from '@lib/helperMethods';
import { mergeObjectify, objectify } from '@lib/arrays';
import {
  LARGE_DESKTOP,
  LARGE_DESKTOP_HD,
  LARGE_MOBILE,
  MEDIUM_DESKTOP,
  MEDIUM_DESKTOP_HD,
  MEDIUM_MOBILE,
  SMALL_DESKTOP,
  SMALL_DESKTOP_HD,
  SMALL_MOBILE,
  X_LARGE_DESKTOP,
  X_LARGE_DESKTOP_HD,
  X_LARGE_MOBILE,
  X_SMALL_DESKTOP,
  X_SMALL_DESKTOP_HD,
  X_SMALL_MOBILE,
} from '@identity/constants';

import { breakpoints as b } from '@identity/breakpoints';

export const splitValue = (value: string): Array<Array<string>> =>
  value.split(' ').map((s) => s.split('-'));
export const getPostFixes = (type: string): Array<string> | void => {
  switch (type) {
    // if target spacing is horizontal, we'll set the left and right spacing
    case 'horizontal':
      return ['Left', 'Right'];
    // if target spacing is vertical we'll set the top and bottom
    case 'vertical':
      return ['Top', 'Bottom'];
    // if target spacing is all then no prefix is needed
    case 'all':
      return [''];
    // if target spacing is meant to unset existing styles
    case 'none':
      return;
    // otherwise the specific prefix must be provided, so we just format it correctly
    default:
      return [`${type.charAt(0).toUpperCase()}${type.slice(1)}`];
  }
};
export type SpacingSettingKey = 'margin' | 'padding';
export type SpacingOption = string | { [key: string]: string };
export type SpacingSetting = Partial<Record<SpacingSettingKey, SpacingOption>>;
export type Style = {
  [key: string]: string | number;
};
export type StyleValue = Style | string | number;
export type StyleBlock = {
  [key: string]: StyleValue;
};
export type Scale = {
  [key: string]: {
    [key: string]: number | string;
  };
};
export const spacerFactory =
  (scale: Scale, breakPoints: Record<string, string>) =>
  /**
   * The actual spacing function created by the factory method
   * @param options {{ [string]: string | { [string]: string } }}
   * @returns {{}} - applicable spacing styles based on provided options
   */
  (options: SpacingSetting): StyleBlock => {
    /**
     * Creates the styles for a specific breakpoint based on the specified postFixes
     * @param property {string} - css property
     * @param size {string} - a size matching the those modelled in the scale object
     * @param postFixes {String[]} - any of: [ Top, Bottom, Left, Right]
     * @param breakPoint {string}- the breakpoint name matching values in the scale object
     * @returns {{}} - the styles for the specified breakpoint
     */
    const getStyle = (
      property: string,
      size: string,
      postFixes: Array<string> | void,
      breakPoint = 'default'
    ): Style | void => {
      // if 'none' setting was used then property value should be 0.
      if (!postFixes || size === 'none') {
        return {
          [property]: 0,
        };
      }
      const sizeIndex = size.toUpperCase();
      if (!(sizeIndex in scale) || !(breakPoint in scale[sizeIndex])) {
        console.error('Spacing: Invalid setting provided', {
          size,
          breakPoint,
          property,
        });
        return;
      }
      return objectify(postFixes, (postFix: string) => {
        const key = `${property}${postFix}`;
        return {
          // postfix could be '', which would just set the base property
          [key]: scale[size.toUpperCase()][breakPoint] || 1,
        };
      });
    };
    /**
     * Aggregates styles for all the provided breakpoints
     * @param property {string} - css property
     * @param size {string} - a size matching the those modelled in the scale object
     * @param [type='all'] {string} - One of: [ all, horizontal, vertical, top, bottom, left, right]
     * @param [breakpoint] {string} - if provided only creates styles for the specified breakpoint
     * @returns {{}} - an object with all the styles for the specified property
     */
    const getStyles = (
      property: string,
      size: string,
      type = 'all',
      breakpoint?: string
    ): StyleBlock | void => {
      // get applicable style post fixes
      const postFixes: Array<string> | void = getPostFixes(type);
      // breakpoint is set when an individual style is needed rather than the
      // the styles for all breakpoints
      if (breakpoint) {
        // if breakpoint is default then we don't want to wrap it in the
        // breakpoint media query
        if (breakpoint === 'default') {
          return getStyle(property, size, postFixes);
        }
        const style = getStyle(property, size, postFixes, breakpoint);
        if (!style) {
          return {};
        }
        return {
          [breakPoints[breakpoint]]: style,
        };
      }
      return {
        ...getStyle(property, size, postFixes),
        ...objectify(
          Object.entries(breakPoints),
          ([breakPointName, breakPointValue]: [string, any]) => {
            const style = getStyle(property, size, postFixes, breakPointName);
            if (!style) {
              return {};
            }
            return {
              [breakPointValue]: style,
            };
          }
        ),
      };
    };
    return mergeObjectify(
      Object.entries(options),
      ([property, settingsString]: [string, any]) => {
        // Check if individual breakpoint settings were passed in, e.g.:
        // { margin: { default: 'all-sm', desktop: 'horizontal-md vertical-sm' } }
        if (typeof settingsString !== 'string') {
          return objectify(
            Object.entries(settingsString),
            ([breakpoint, breakpointSettingsString]: [string, string]) => {
              // get the breakpoint settings in the needed format [ [ type, size ] ]
              const breakpointSettings = splitValue(breakpointSettingsString);
              // because there may be separate properties within the same breakpoint
              // the results must be merged instead of just spread.
              return mergeObjectify(
                breakpointSettings,
                ([type, size]: [string, string]) =>
                  getStyles(property, size, type, breakpoint)
              );
            }
          );
        }
        // get the settings in the needed format [ [ type, size ] ]
        const settings = splitValue(settingsString);
        return mergeObjectify(settings, ([type, size]: [string, string]) =>
          getStyles(property, size, type)
        );
      }
    );
  };
export const scale = {
  XS: {
    default: remCalc(X_SMALL_MOBILE),
    tablet: remCalc(X_SMALL_MOBILE),
    desktop: remCalc(X_SMALL_DESKTOP),
    desktopHD: remCalc(X_SMALL_DESKTOP_HD),
  },
  SM: {
    default: remCalc(SMALL_MOBILE),
    tablet: remCalc(SMALL_MOBILE),
    desktop: remCalc(SMALL_DESKTOP),
    desktopHD: remCalc(SMALL_DESKTOP_HD),
  },
  MD: {
    default: remCalc(MEDIUM_MOBILE),
    tablet: remCalc(MEDIUM_MOBILE),
    desktop: remCalc(MEDIUM_DESKTOP),
    desktopHD: remCalc(MEDIUM_DESKTOP_HD),
  },
  LG: {
    default: remCalc(LARGE_MOBILE),
    tablet: remCalc(LARGE_MOBILE),
    desktop: remCalc(LARGE_DESKTOP),
    desktopHD: remCalc(LARGE_DESKTOP_HD),
  },
  XL: {
    default: remCalc(X_LARGE_MOBILE),
    tablet: remCalc(X_LARGE_MOBILE),
    desktop: remCalc(X_LARGE_DESKTOP),
    desktopHD: remCalc(X_LARGE_DESKTOP_HD),
  },
};
export const breakPoints = {
  tablet: b.TABLET,
  desktop: b.DESKTOP,
  desktopHD: b.DESKTOP_HD,
};
export const spacing = spacerFactory(scale, breakPoints);
export default spacing;

export const invertSpacing = (property: string, size: string) => {
  const points = scale[size];
  return `
    ${property}: -${points.default};
    ${b.TABLET} {
      ${property}: -${points.tablet};
    }
    ${b.DESKTOP} {
      ${property}: -${points.desktop};
    }    
    ${b.DESKTOP_HD} {
      ${property}: -${points.desktopHD};
    }
  `;
};
