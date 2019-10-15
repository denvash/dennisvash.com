// #region  Imports
import { Email, Footer, Head, Loader, Nav, Social, ThemeProvider } from '@components';
import { GlobalStyle } from '@styles';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { scrollIntoView } from '@utils';
// #endregion

const INITIAL_GITHUB_INFO = { stars: 20, forks: 15 };

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, location }) => {
  const [isLoading, setIsLoading] = useState(true);
  const parameters = { complete: () => setIsLoading(false) };

  useEffect(() => {
    !isLoading && scrollIntoView(location);
  }, [isLoading]);

  return (
    <ThemeProvider>
      <div id="root">
        <Head />
        <GlobalStyle />
        {isLoading ? (
          <Loader parameters={parameters} />
        ) : (
          <div className="container">
            <Nav />
            <Social />
            <Email />
            {children}
            <Footer githubInfo={INITIAL_GITHUB_INFO} />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
