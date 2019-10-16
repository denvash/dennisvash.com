import styledTheme from 'styled-theming';
import { lighten, darken, transparentize, setLightness } from 'polished';
import { hack, summerTime, gentleman, blackPurple } from './palettes';

const MODE = 'mode';

const primary = styledTheme(MODE, {
  [hack.name]: hack.primary,
  [summerTime.name]: summerTime.primary,
  [gentleman.name]: gentleman.primary,
  [blackPurple.name]: blackPurple.primary,
});

const secondary = styledTheme(MODE, {
  [hack.name]: hack.secondary,
  [summerTime.name]: summerTime.secondary,
  [gentleman.name]: gentleman.secondary,
  [blackPurple.name]: blackPurple.secondary,
});

const text = styledTheme(MODE, {
  [hack.name]: hack.text,
  [summerTime.name]: summerTime.text,
  [gentleman.name]: gentleman.text,
  [blackPurple.name]: blackPurple.text,
});

const background = styledTheme(MODE, {
  [hack.name]: hack.background,
  [summerTime.name]: summerTime.background,
  [gentleman.name]: gentleman.background,
  [blackPurple.name]: blackPurple.background,
});

const backgroundLightDark = styledTheme(MODE, {
  [hack.name]: hack.background,
  [summerTime.name]: summerTime.background,
  // contrast backgroundLighten polish for light themes.
  [gentleman.name]: darken(0.07, gentleman.backgroundDark),
  [blackPurple.name]: blackPurple.background,
});

const polish = {
  lighten: (amount, polish) => props => lighten(amount, polish(props)),
  transparentize: (amount, polish) => props => transparentize(amount, polish(props)),
  darken: (amount, polish) => props => darken(amount, polish(props)),
  brighter: (amount, polish) => props => setLightness(amount, polish(props)),
};

const theme = {
  palettes: [gentleman, summerTime, blackPurple, hack],
  polish,
  colors: {
    primary,
    primaryTransparent: polish.transparentize(0.9, primary),

    secondary,
    secondaryLighten: polish.lighten(0.1, secondary),
    secondaryBrighter: polish.brighter(0.8, secondary),
    secondaryTransparent: polish.transparentize(0.9, secondary),

    background,
    backgroundLight: polish.lighten(0.07, backgroundLightDark),
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
