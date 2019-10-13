// #region  Imports
import Transition, { delay } from '@components/Transition';
import { useHero } from '@hooks';
import { media, mixins, Section, theme } from '@styles';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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

const DELAY = 100;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { title, name, subtitle, html } = useHero();

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <Hi style={delay(DELAY)}>{title}</Hi>;
  const two = <Name style={delay(2 * DELAY)}>{name}.</Name>;
  const three = <Subtitle style={delay(3 * DELAY)}>{subtitle}</Subtitle>;
  const four = <Blurb style={delay(4 * DELAY)} dangerouslySetInnerHTML={{ __html: html }} />;

  const items = [one, two, three, four];

  return (
    <HeroContainer>
      <Transition.Group>
        {isMounted && items.map((item, i) => <Transition key={i}>{item}</Transition>)}
      </Transition.Group>
    </HeroContainer>
  );
};

export default Hero;
