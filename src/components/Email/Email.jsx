// #region  Imports
import { email } from '@config';
import { media, theme } from '@styles';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Transition from '@components/Transition';
// #endregion

// #region  Styling
const { colors, fontSizes, fonts } = theme;

const EmailContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  color: ${colors.text};
  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};
  div {
    width: 100%;
    margin: 0 auto;
  }
`;
const EmailLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.text};
  }
`;
const EmailLink = styled.a`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
  letter-spacing: 0.5px;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;

const ThemeButton = styled.div`
  padding: 10px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;
// #endregion

const Email = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <EmailContainer>
      <Transition.Group>
        {isMounted && (
          <Transition>
            <EmailLinkWrapper>
              <EmailLink href={`mailto:${email}`} target="_blank">
                {email}
              </EmailLink>
            </EmailLinkWrapper>
          </Transition>
        )}
      </Transition.Group>
    </EmailContainer>
  );
};

export default Email;
