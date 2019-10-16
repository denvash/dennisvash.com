// #region  Imports
import { Email, Footer, Head, Loader, Nav, Social, ThemeProvider } from '@components';
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

const Layout = ({ children, location }) => {
  useEffect(() => {
    scrollIntoView(location);
  }, []);

  return (
    <ThemeProvider>
      <div id="root">
        <Head />
        <GlobalStyle />
        <div className="container">
          <Nav />
          <Social />
          <Email />
          {children}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
