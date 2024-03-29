import { css } from 'styled-components';

export const MEDIA_SIZES = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(MEDIA_SIZES).reduce((accumulator, label) => {
  // Use `em` in breakpoints to work properly cross-browser.
  // Support users changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = MEDIA_SIZES[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
