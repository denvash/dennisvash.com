// #region  Imports
import { IconExternal, IconFolder, IconGithub } from '@components/icons';
import { srConfig } from '@config';
import { useProjects } from '@hooks';
import { media, mixins, theme, ANIMATION_CLASSES } from '@styles';
import sr from '@utils/sr';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Transition from '@components/Transition';
// #endregion

// #region  Styling
const { colors, fontSizes, fonts } = theme;

const ProjectsGrid = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const ProjectInner = styled.div`
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.backgroundLight};
`;
const Project = styled.div`
  ${mixins.boxShadowSmall}
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${ProjectInner} {
      transform: translateY(-5px);
    }
  }
`;
const ProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const Folder = styled.div`
  color: ${colors.primary};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const Links = styled.div`
  margin-right: -10px;
  color: ${colors.secondaryLighten};
`;
const IconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  color: ${colors.textTransparent};
  svg {
    width: 20px;
    height: 20px;
  }
`;
const ProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxlarge};
  color: ${colors.textTransparent};
`;
const ProjectDescription = styled.div`
  font-size: 17px;
  color: ${colors.text};
  a {
    ${mixins.inlineLink};
  }
`;
const TechList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xsmall};
    color: ${colors.textTransparent};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
// #endregion

const sideProjectPredicate = ({ featured }) => !(featured === 'true');

const SideProjects = () => {
  const revealProjects = useRef([]);
  const projects = useProjects(sideProjectPredicate);

  useEffect(() => {
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <ProjectsGrid>
      <Transition.Group className="projects">
        {projects.map(({ github, external, title, tech, html }, i) => (
          <Transition key={i} classNames={ANIMATION_CLASSES.FADE_UP} timeout={5000}>
            <Project key={i} ref={el => (revealProjects.current[i] = el)}>
              <ProjectInner>
                <header>
                  <ProjectHeader>
                    <Folder>
                      <IconFolder />
                    </Folder>
                    <Links>
                      {github && (
                        <IconLink
                          href={github}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="Github Link">
                          <IconGithub />
                        </IconLink>
                      )}
                      {external && (
                        <IconLink
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link">
                          <IconExternal />
                        </IconLink>
                      )}
                    </Links>
                  </ProjectHeader>
                  <ProjectName>{title}</ProjectName>
                  <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                </header>
                <footer>
                  <TechList>
                    {tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </TechList>
                </footer>
              </ProjectInner>
            </Project>
          </Transition>
        ))}
      </Transition.Group>
    </ProjectsGrid>
  );
};

export default SideProjects;
