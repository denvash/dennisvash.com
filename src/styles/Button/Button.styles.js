import styled from 'styled-components';
import { theme } from '@styles';
import { transparentize } from 'polished';
const { fontSizes, fonts, colors } = theme;

const { primary } = colors;

const Button = styled.button`
  color: ${primary};
  background-color: transparent;
  border: 1px solid ${primary};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smallish};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => transparentize(0.9, primary(props))};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
