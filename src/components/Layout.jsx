// #region  Imports
import { Email, Footer, Head, Loader, Nav, Social } from '@components';
import { GlobalStyle } from '@styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
// #endregion

const INITIAL_GITHUB_INFO = { stars: 0, forks: 0 };

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [githubInfo, setGithubInfo] = useState(INITIAL_GITHUB_INFO);

  // TODO: AUTH
  // useEffect(() => {
  //   fetch(content.footer.fetchUrl)
  //     .then(response => response.json())
  //     .then(json => {
  //       const { stargazers_count: stars, forks_count: forks } = json;
  //       setGithubInfo({
  //         stars,
  //         forks,
  //       });
  //     });
  // }, []);

  const parameters = { complete: () => setIsLoading(false) };

  return (
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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
