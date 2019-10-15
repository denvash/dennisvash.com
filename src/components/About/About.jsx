// #region  Imports
import { github, srConfig } from '@config';
import { useAbout } from '@hooks';
import { Heading, media, mixins, Section, theme } from '@styles';
import sr from '@utils/sr';
import Img from 'gatsby-image';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// #endregion

// #region  Styling
const { colors, fontSizes, fonts, polish } = theme;

const AboutContainer = styled(Section)`
  position: relative;
`;

const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;

const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;

const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${colors.text};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.primary};
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
  &:hover {
    cursor: pointer;
    color: ${colors.secondaryLighten};
    outline: none;
    transition: ${theme.transition};
  }
`;

const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;

const Avatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(100%);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;

const AvatarContainer = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.secondary};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${Avatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.secondaryBrighter};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.secondaryLighten};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;
// #endregion

const About = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  const { title, skills, avatar, html } = useAbout();

  return (
    <AboutContainer id="about" ref={revealContainer}>
      <Heading>{title}</Heading>
      <FlexContainer>
        <ContentContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </ContentContainer>
        <PicContainer>
          <AvatarContainer href={github} target="_blank" rel="nofollow noopener noreferrer">
            <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </AvatarContainer>
        </PicContainer>
      </FlexContainer>
    </AboutContainer>
  );
};

export default About;
