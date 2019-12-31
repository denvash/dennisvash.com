// #region  Imports
import { content, srConfig } from '@config';
import { Heading, mixins, Section } from '@styles';
import { sr } from '@utils';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Featured from './Featured/Featured';
import SideProjects from './SideProjects/SideProjects';
// #endregion

// #region  Styling
const Container = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
// #endregion

const { heading, id } = content.Projects;

const Projects = () => {
  const revealTitle = useRef(null);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
  }, []);

  return (
    <Container id={id}>
      <Heading ref={revealTitle}>{heading}</Heading>
      <Featured />
      <SideProjects />
    </Container>
  );
};

export default Projects;
