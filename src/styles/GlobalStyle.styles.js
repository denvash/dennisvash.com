import { createGlobalStyle } from 'styled-components';
import * as fontFamilies from './fonts';
import media from './media';
import theme from './theme';
import { transparentize } from 'polished';

const { colors, fontSizes, fonts } = theme;

export const ANIMATION_CLASSES = {
  FADE: 'fade',
  FADE_UP: 'fadeup',
  FADE_DOWN: 'fadedown',
};

const { FADE, FADE_UP, FADE_DOWN } = ANIMATION_CLASSES;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreLightWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreLightWOFF}) format('woff'),
    url(${fontFamilies.CalibreLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreLightItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreLightItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreRegularWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreRegularWOFF}) format('woff'),
    url(${fontFamilies.CalibreRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreRegularItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreRegularItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreMediumWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreMediumWOFF}) format('woff'),
    url(${fontFamilies.CalibreMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreMediumItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreMediumItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreSemiboldWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreSemiboldWOFF}) format('woff'),
    url(${fontFamilies.CalibreSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreSemiboldItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreSemiboldItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoRegularWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoRegularWOFF}) format('woff'),
    url(${fontFamilies.SFMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoRegularItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoRegularItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoMediumWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoMediumWOFF}) format('woff'),
    url(${fontFamilies.SFMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoMediumItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoMediumItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoSemiboldWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoSemiboldWOFF}) format('woff'),
    url(${fontFamilies.SFMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoSemiboldItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoSemiboldItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: auto;
  }

  @font-face {
    font-family: 'Major Mono Display';
    src: url(${fontFamilies.MajorMonoTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.background};
    color: ${colors.text};
    line-height: 1.3;
    font-family: ${fonts.Calibre};
    font-size: ${fontSizes.xlarge};
    ${media.phablet`font-size: ${fontSizes.large};`}

    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > .container > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${props => colors.primaryTransparent(props, 0.8)};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${colors.text};
    margin: 0 0 10px 0;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }


  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.primary};
      outline: 0;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .${FADE_UP}-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .${FADE_UP}-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .${FADE_DOWN}-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .${FADE_DOWN}-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .${FADE}-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${theme.easing};
  }

  .${FADE}-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }


  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    height: 1px;
    width: 10px;
    background-color: ${props => transparentize(0.9, colors.secondary(props))};
  }

  ::-webkit-scrollbar-thumb {
    width: 3px;
    background-color: ${colors.secondary};
  }
`;

export default GlobalStyle;
