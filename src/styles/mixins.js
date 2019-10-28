import { css } from 'styled-components';
import theme from './theme';
import media from './media';

const { colors, fontSizes, fonts } = theme;

const smallButton = css`
  color: ${colors.primary};
  background-color: transparent;
  border: 1px solid ${colors.primary};
  border-radius: ${theme.borderRadius};
  padding: 0.75rem 1rem;
  font-size: ${fontSizes.smallish};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.primaryTransparent};
  }
  &:after {
    display: none !important;
  }
`;

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const link = css`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: ${theme.transition};
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    color: ${colors.primary};
    outline: 0;
  }
`;
const mixins = {
  flexCenter,

  flexBetween: css`
    ${flexCenter}
    justify-content: space-between;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link,

  inlineLink: css`
    color: ${colors.secondary};
    &:hover,
    &:focus,
    &:active {
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 3px;
      position: relative;
      bottom: 0.2rem;
      background-color: ${colors.secondary};
      transition: ${theme.transition};
      opacity: 0.4;
    }
  `,

  smallButton,
  bigButton: css`
    ${smallButton}
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.small};
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.secondary};
    transition: ${theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.secondary};
    }
  `,

  boxShadowSmall: css`
    transition: ${theme.transition};
    &:hover,
    &:focus {
      box-shadow: 1px 7px 30px -15px ${colors.secondary};
    }
  `,
};

export default mixins;
