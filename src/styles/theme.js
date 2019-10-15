import styledTheme from 'styled-theming';
import { lighten, darken, transparentize } from 'polished';

const MODE = 'mode';

const hack = {
  name: 'hack',
  primary: '#64ffda',
  secondary: '#8892b0',
  title: '#e6f1ff',
  background: '#0a192f',
};

const summerTime = {
  name: 'summerTime',
  primary: '#F699D9',
  secondary: '#EBEA8B',
  background: '#2B303B',
  title: '#ECF6FF',
};

const primary = styledTheme(MODE, {
  hack: hack.primary,
  summerTime: summerTime.primary,
});

const secondary = styledTheme(MODE, {
  hack: hack.secondary,
  summerTime: summerTime.secondary,
});

const background = styledTheme(MODE, {
  hack: hack.background,
  summerTime: summerTime.background,
});

const title = styledTheme(MODE, {
  hack: hack.title,
  summerTime: summerTime.title,
});

const theme = {
  palettes: [hack, summerTime],

  colors: {
    primary,
    secondary,
    background,
    title,
    primaryTransparent: (mode, amount = 0.9) => transparentize(amount, primary(mode)),
    lightenSecondary: (mode, amount = 0.1) => lighten(amount, secondary(mode)),
    darkenBackground: (props, amount = 0.03) => darken(amount, background(props)),
    titleTransparent: (mode, amount = 0.6) => transparentize(amount, title(mode)),
    lightenBackground: (mode, amount = 0.07) => lighten(amount, background(mode)),
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
  margin: '20px',
  radius: 3,
};

export default theme;
