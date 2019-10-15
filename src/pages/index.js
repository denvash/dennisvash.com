import { About, Contact, Hero, Layout, Projects, Timeline } from '@components';
import { Main, mixins } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <MainContainer id="content">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Contact />
    </MainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
