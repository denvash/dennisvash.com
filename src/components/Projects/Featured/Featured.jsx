// #region  Imports
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { theme, mixins, media } from '@styles';
import { srConfig } from '@config';
import { IconGithub, IconExternal } from '@components/icons';
import sr from '@utils/sr';
import { useProjects } from '@hooks';
// #endregion

// #region  Styling
const { colors, fontSizes, fonts, polish } = theme;

const ContentContainer = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  ${media.tablet`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`;
const FeaturedLabel = styled.h4`
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  color: ${colors.primary};
  font-family: ${fonts.SFMono};
  padding-top: 0;
`;
const ProjectName = styled.h5`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${colors.textTransparent};
  ${media.tablet`font-size: 24px;`};
  ${media.thone`color: ${colors.text};`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const ProjectDescription = styled.div`
  ${mixins.boxShadowSmall};
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${colors.backgroundLight};
  color: ${colors.text};
  font-size: ${fontSizes.large};
  border-radius: ${theme.borderRadius};
  ${media.phone`
    padding: 20px;
  `};
  p {
    margin: 6px 0 0 0;
  }
  a {
    ${mixins.inlineLink};
  }
`;
const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0 10px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smallish};
    color: ${colors.textTransparent};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: normal;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.tablet`
      margin-right: 10px;
    `};
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: ${colors.textTransparent};
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const FeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${theme.borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(100%);
  ${media.tablet`
    display: none;
  `};
`;

const ImgContainer = styled.a`
  ${mixins.boxShadow};
  box-shadow: 0px 6px 20px -15px ${colors.secondary};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: transparent;
  transition: ${theme.transition};
  ${media.tablet`display: none;`};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${FeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    background-color: ${polish.brighter(0.1, colors.secondary)};
    border-radius: ${+theme.borderRadius.replace('px', '') + 2}px;
    mix-blend-mode: screen;
  }
`;

const Project = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.tablet`
    margin-bottom: 0px;
  `};
  &:last-of-type {
    margin-bottom: 0px;
  }
  &:nth-of-type(odd) {
    ${ContentContainer} {
      grid-column: 7 / -1;
      text-align: right;
      ${media.tablet`
        grid-column: 1 / -1;
        text-align: left;
      `};
      ${media.phablet`
        padding: 30px 25px 20px;
      `};
    }
    ${TechList} {
      justify-content: flex-end;
      li {
        margin-left: ${theme.margin};
        margin-right: 0;
      }
    }
    ${Links} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${ImgContainer} {
      grid-column: 1 / 8;
    }
  }
`;

// #endregion

const predicate = ({ featured }) => featured === 'true';

const Featured = () => {
  const revealProjects = useRef([]);
  const data = useProjects(predicate);

  useEffect(() => {
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <>
      {data.map(({ external, title, tech, github, cover, html }, i) => (
        <Project key={i} ref={el => (revealProjects.current[i] = el)}>
          <ContentContainer>
            <FeaturedLabel>Featured Project</FeaturedLabel>
            <ProjectName>{title}</ProjectName>
            <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
            {tech && (
              <TechList>
                {tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </TechList>
            )}
            <Links>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="Github Link">
                  <IconGithub />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="External Link">
                  <IconExternal />
                </a>
              )}
            </Links>
          </ContentContainer>

          {cover && (
            <ImgContainer
              href={external ? external : github ? github : '#'}
              target="_blank"
              rel="nofollow noopener noreferrer">
              <FeaturedImg fluid={cover.childImageSharp.fluid} />
            </ImgContainer>
          )}
        </Project>
      ))}
    </>
  );
};

export default Featured;
