import styledTheme from 'styled-theming';
import { lighten, darken, transparentize } from 'polished';

const MODE = 'mode';

const hack = {
  name: 'hack',
  primary: '#64ffda',
  secondary: '#64ffda',
  text: '#8892b0',
  background: '#0a192f',
};

const summerTime = {
  name: 'summerTime',
  primary: '#F699D9',
  secondary: '#EBEA8B',
  background: '#2B303B',
  text: '#ECF6FF',
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

const text = styledTheme(MODE, {
  hack: hack.text,
  summerTime: summerTime.text,
});

const polish = {
  lighten: (amount, polish) => props => lighten(amount, polish(props)),
  transparentize: (amount, polish) => props => transparentize(amount, polish(props)),
  darken: (amount, polish) => props => darken(amount, polish(props)),
};

const theme = {
  palettes: [hack, summerTime],
  polish,
  colors: {
    primary,
    primaryTransparent: polish.transparentize(0.9, primary),

    secondary,
    secondaryLighten: polish.lighten(0.1, secondary),

    background,
    backgroundLight: polish.lighten(0.07, background),
    backgroundLighten: polish.lighten(0.6, background),
    backgroundDarken: polish.darken(0.03, background),

    text,
    textTransparent: polish.transparentize(0.3, text),
    textLight: polish.lighten(0.5, text),
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
