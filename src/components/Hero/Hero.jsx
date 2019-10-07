// #region  Imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import { theme, mixins, media, Section } from '@styles';
// #endregion

const { colors, fontSizes, fonts } = theme;

// #region  Styling
const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const Hi = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
`;
const Name = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Subtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
// #endregion

const delay = number => ({ transitionDelay: `${number}ms` });

const Hero = ({ title, name, subtitle, html }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = () => <Hi style={delay(100)}>{title}</Hi>;
  const two = () => <Name style={delay(200)}>{name}.</Name>;
  const three = () => <Subtitle style={delay(300)}>{subtitle}</Subtitle>;
  const four = () => <Blurb style={delay(400)} dangerouslySetInnerHTML={{ __html: html }} />;

  const items = [one, two, three, four];

  return (
    <HeroContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, key) => (
            <CSSTransition key={key} classNames="fadeup" timeout={3000}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </HeroContainer>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  contactText: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default Hero;
