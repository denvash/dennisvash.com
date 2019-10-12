import { About, Contact, Hero, Layout, Projects, Timeline } from '@components';
import { Main, mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const IndexPage = () => (
  <Layout>
    <MainContainer id="content">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Contact />
    </MainContainer>
  </Layout>
);

export default IndexPage;
