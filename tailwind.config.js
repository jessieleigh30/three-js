const round = (value, precision = 0) => {
  const mult = 10 ** precision;
  return Math.round(value * mult) / mult;
};

const remCalc = (pixelValue, baseValue = 16) =>
  `${round(pixelValue / baseValue, 2)}rem`;

const spacing = {
  0: 0,
  8: remCalc(8),
  12: remCalc(12),
  16: remCalc(16),
  20: remCalc(20),
  24: remCalc(24),
  32: remCalc(32),
  40: remCalc(40),
  52: remCalc(52),
  64: remCalc(64),
  80: remCalc(80),
  100: remCalc(100),
  128: remCalc(128),
  160: remCalc(160),
  200: remCalc(200),
  260: remCalc(260),
  320: remCalc(320),
};

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      primary: {
        DEFAULT: '#00b5e2',
        light: '#35c9ee',
        dark: '#0098be',
      },
      grey: {
        DEFAULT: '#cdd7e1',
        light: '#d9e1e9',
        dark: '#bbc5cf',
      },
      black: {
        DEFAULT: '#1d242d',
        light: '#5b6770',
        dark: '#090c10',
      },
      white: {
        DEFAULT: '#fff',
        light: '#f3f7fa',
        dark: '#e2eaf2',
      },
      red: {
        DEFAULT: '#d50032',
        light: '#e80e41',
        dark: '#c20431',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: spacing['12'],
      },
    },
    fontFamily: {
      body: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: remCalc(10),
      sm: remCalc(13),
      base: remCalc(20),
      1: remCalc(20),
      2: remCalc(24),
      3: remCalc(32),
      4: remCalc(40),
      5: remCalc(52),
      6: remCalc(64),
      7: remCalc(80),
      8: remCalc(100),
      9: remCalc(128),
      10: remCalc(160),
    },
    lineHeight: {
      heading: 1.32,
      body: 1.75,
    },
    screens: {
      tablet: '768px',
      desktop: '1024px',
      desktop_hd: '1440px',
    },
    spacing,
    extend: {
      spacing: {
        xxs: spacing['8'],
        xs: spacing['20'],
        sm: spacing['32'],
        md: spacing['52'],
        lg: spacing['100'],
        xl: spacing['320'],
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  plugins: [],
};
