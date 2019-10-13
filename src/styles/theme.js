import styledTheme from 'styled-theming';

const hack = {
  primary: '#64ffda',
  secondary: '#606a86',
  title: '#e6f1ff',
  background: '#0a192f',
};

const summerTime = {
  primary: '#F699D9',
  secondary: '#EBEA8B',
  background: '#2B303B',
  title: '#ECF6FF',
};

const primary = styledTheme('mode', {
  hack: hack.primary,
  summerTime: summerTime.primary,
});

const theme = {
  colors: {
    primary,
    darkGrey: '#333f58',
    darkNavy: '#020c1b',
    green: '#64ffda',
    grey: '#4c5772',
    lightestSlate: '#ccd6f6',
    lightGrey: '#606a86',
    lightNavy: '#172a45',
    lightSlate: '#a8b2d1',
    mediumGrey: '#2d3952',
    navy: '#0a192f',
    slate: '#8892b0',
    transGreen: '#64ffda12',
    white: '#e6f1ff',
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;
