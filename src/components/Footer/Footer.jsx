// #region  Imports
// TODO: Implement query github
import iconMapper, { IconFork, IconStar } from '@components/icons';
// import iconMapper from '@components/icons';
import { content, socialMedia } from '@config';
import { media, mixins, theme } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
// #endregion

// #region  Styling
const { colors, fontSizes, fonts } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundDark};
  color: ${colors.secondary};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const SocialContainer = styled.div`
  color: ${colors.secondaryLighten};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const GithubContainer = styled.div`
  margin: 10px 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
  line-height: 1;
`;
const GithubLink = styled.a`
  color: ${colors.text};
`;
const GithubInfo = styled.div`
  margin-top: 10px;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 0 7px;
  }
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
  }
`;
// #endregion

const query = graphql`
  {
    github {
      viewer {
        repository(name: "dennisvash.com") {
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
    }
  }
`;

const parseDataInfo = data => {
  const { stargazers, forks } = data.github.viewer.repository;
  return { stars: stargazers.totalCount, forks: forks.totalCount };
};

const Footer = () => {
  const data = useStaticQuery(query);
  const { stars, forks } = parseDataInfo(data);

  return (
    <FooterContainer>
      <SocialContainer>
        <SocialItemList>
          {socialMedia &&
            Object.values(socialMedia).map(({ name, url }, i) => (
              <li key={i}>
                <SocialLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}>
                  {iconMapper[name]}
                </SocialLink>
              </li>
            ))}
        </SocialItemList>
      </SocialContainer>
      <GithubContainer>
        <GithubLink href={content.footer.url} target="_blank" rel="nofollow noopener noreferrer">
          <div>{content.footer.heading}</div>
          <GithubInfo>
            <span>
              <IconStar />
              <span>{stars}</span>
            </span>
            <span>
              <IconFork />
              <span>{forks}</span>
            </span>
          </GithubInfo>
        </GithubLink>
      </GithubContainer>
    </FooterContainer>
  );
};
Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
