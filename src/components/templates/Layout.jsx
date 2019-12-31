// #region  Imports
import { Email, Footer, Head, Nav, Social, ThemeProvider } from '@components';
import styled from 'styled-components';

import { GlobalStyle } from '@styles';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { scrollIntoView } from '@utils';
// #endregion

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const LayoutContainer = styled.div`
  position: relative;
`;

const Layout = ({ children, location }) => {
  useEffect(() => {
    scrollIntoView(location);
  }, []);
  return (
    <ThemeProvider>
      <div id="root">
        <Head />
        <GlobalStyle />
        <Nav />
        <LayoutContainer className="container">
          <Social />
          <Email />
          {children}
          <Footer />
        </LayoutContainer>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
