import styledTheme from 'styled-theming';
import { lighten, darken, transparentize, setLightness } from 'polished';
import palettes from './palettes';

const polish = {
  lighten: (amount, polish) => props => lighten(amount, polish(props)),
  transparentize: (amount, polish) => props => transparentize(amount, polish(props)),
  darken: (amount, polish) => props => darken(amount, polish(props)),
  brighter: (amount, polish) => props => setLightness(amount, polish(props)),
};

const { hack, summerTime, newsPaper, purpleLife, lancome } = palettes;

const groupByProp = Object.values(palettes).reduce(
  (acc, { name, primary, secondary, text, background, isLightTheme }) => ({
    primary: { ...acc.primary, [name]: primary },
    secondary: { ...acc.secondary, [name]: secondary },
    text: { ...acc.text, [name]: text },
    background: { ...acc.background, [name]: background },
    backgroundContrast: {
      ...acc.backgroundContrast,
      [name]: isLightTheme ? darken(0.02, background) : lighten(0.07, background),
    },
  }),
  {},
);

const dynamicProp = Object.entries(groupByProp).reduce(
  (acc, [key, value]) => ({ ...acc, [key]: styledTheme('mode', value) }),
  {},
);

const { primary, secondary, text, background, backgroundContrast } = dynamicProp;

const theme = {
  palettes: [purpleLife, newsPaper, lancome, summerTime, hack],
  polish,
  colors: {
    primary,
    primaryTransparent: polish.transparentize(0.9, primary),

    secondary,
    secondaryLighten: polish.lighten(0.1, secondary),
    secondaryBrighter: polish.brighter(0.8, secondary),
    secondaryTransparent: polish.transparentize(0.9, secondary),

    background,
    backgroundContrast,
    backgroundContrastDark: polish.darken(0.05, backgroundContrast),
    backgroundLight: polish.lighten(0.07, background),
    backgroundLighten: polish.lighten(0.6, background),
    backgroundDark: polish.darken(0.03, background),
    backgroundDarken: polish.darken(0.5, background),

    text,
    textTransparent: polish.transparentize(0.3, text),
    textLight: polish.lighten(0.5, text),
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
    MajorMono:
      'Major Mono Display, Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
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
};

export default theme;
