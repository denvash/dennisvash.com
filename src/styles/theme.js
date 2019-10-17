import styledTheme from 'styled-theming';
import { lighten, darken, transparentize, setLightness } from 'polished';
import { hack, summerTime, newsPaper, purpleLife } from './palettes';

const MODE = 'mode';

const primary = styledTheme(MODE, {
  [hack.name]: hack.primary,
  [summerTime.name]: summerTime.primary,
  [newsPaper.name]: newsPaper.primary,
  [purpleLife.name]: purpleLife.primary,
});

const secondary = styledTheme(MODE, {
  [hack.name]: hack.secondary,
  [summerTime.name]: summerTime.secondary,
  [newsPaper.name]: newsPaper.secondary,
  [purpleLife.name]: purpleLife.secondary,
});

const text = styledTheme(MODE, {
  [hack.name]: hack.text,
  [summerTime.name]: summerTime.text,
  [newsPaper.name]: newsPaper.text,
  [purpleLife.name]: purpleLife.text,
});

const background = styledTheme(MODE, {
  [hack.name]: hack.background,
  [summerTime.name]: summerTime.background,
  [newsPaper.name]: newsPaper.background,
  [purpleLife.name]: purpleLife.background,
});

const LIGHTEN_CONST = 0.07;

// contrast backgroundLighten polish for light themes.
const contrastBackground = palette =>
  palette.backgroundDark ? darken(LIGHTEN_CONST, palette.backgroundDark) : palette.background;

const backgroundContrast = styledTheme(MODE, {
  [hack.name]: hack.background,
  [summerTime.name]: summerTime.background,
  [newsPaper.name]: contrastBackground(newsPaper),
  [purpleLife.name]: contrastBackground(purpleLife),
});

const polish = {
  lighten: (amount, polish) => props => lighten(amount, polish(props)),
  transparentize: (amount, polish) => props => transparentize(amount, polish(props)),
  darken: (amount, polish) => props => darken(amount, polish(props)),
  brighter: (amount, polish) => props => setLightness(amount, polish(props)),
};

const theme = {
  palettes: [newsPaper, summerTime, hack, purpleLife],
  polish,
  colors: {
    primary,
    primaryTransparent: polish.transparentize(0.9, primary),

    secondary,
    secondaryLighten: polish.lighten(0.1, secondary),
    secondaryBrighter: polish.brighter(0.8, secondary),
    secondaryTransparent: polish.transparentize(0.9, secondary),

    background,
    backgroundLight: polish.lighten(LIGHTEN_CONST, backgroundContrast),
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
