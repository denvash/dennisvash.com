// #region  Imports
import { Email, Footer, Head, Loader, Nav, Social, ThemeProvider } from '@components';
import { GlobalStyle } from '@styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
// #endregion

const INITIAL_GITHUB_INFO = { stars: 20, forks: 15 };

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const parameters = { complete: () => setIsLoading(false) };

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
  children: PropTypes.node.isRequired,
};

export default Layout;
