// #region  Imports
import { Email, Footer, Head, Loader, Nav, Social } from '@components';
import { content } from '@config';
import { GlobalStyle, mixins, theme } from '@styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// #endregion

const { colors } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkNavy};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
  bottom: 0;
  width: 100%;
  position: fixed;
`;

const INITIAL_GITHUB_INFO = { stars: 0, forks: 0 };

const Layout = ({ children, metadata }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [githubInfo, setGithubInfo] = useState(INITIAL_GITHUB_INFO);

  useEffect(() => {
    fetch(content.footer.fetchUrl)
      .then(response => response.json())
      .then(json => {
        const { stargazers_count: stars, forks_count: forks } = json;
        setGithubInfo({
          stars,
          forks,
        });
      });
  }, []);

  const parameters = { complete: () => setIsLoading(false) };

  return (
    <div id="root">
      <Head metadata={metadata} />
      <GlobalStyle />
      {isLoading ? (
        <Loader parameters={parameters} />
      ) : (
        <div className="container">
          <Nav />
          <Social />
          <Email />
          {children}
          <Footer githubInfo={githubInfo} />
        </div>
      )}
      <FooterContainer>
        <span role="img" aria-label="warning">
          The site still under construction ⚠️
        </span>
      </FooterContainer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  metadata: PropTypes.object.isRequired,
};

export default Layout;
