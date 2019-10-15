// #region  imports
import { content, srConfig } from '@config';
import { Heading, media, mixins, Section, theme } from '@styles';
import sr from '@utils/sr';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useTimeline } from '@hooks';
import { transparentize, lighten } from 'polished';
// #endregion

// #region  Styling
const { colors, fontSizes, fonts } = theme;

const TimelineContainer = styled(Section)`
  position: relative;
  max-width: 700px;
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${media.thone`
    display: block;
  `};
`;
const Tabs = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  ${media.thone`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
    padding-bottom: 10px;
  `};
  ${media.phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
    padding-bottom: 10px;
  `};

  li {
    &:first-of-type {
      ${media.thone`
        margin-left: 50px;
      `};
      ${media.phablet`
        margin-left: 25px;
      `};
    }
    &:last-of-type {
      ${media.thone`
        padding-right: 50px;
      `};
      ${media.phablet`
        padding-right: 25px;
      `};
    }
  }
`;

const transparentizeSecondary = props => transparentize(0.5, colors.secondary(props));
const tabBorder = props => `2px solid ${transparentizeSecondary(props)}`;
const tabHeight = 42;
const tabWidth = 120;

const cssTabHeight = css`
  height: ${tabHeight}px;
`;

const transformTab = value => css`
  transform: translateY(${({ activeTabId }) => (activeTabId > 0 ? activeTabId * value : 0)}px);
`;

const Tab = styled.button`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  ${cssTabHeight};
  padding: 0 20px 2px;
  transition: ${theme.transition};
  border-left: ${tabBorder};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${({ isActive, ...props }) =>
    isActive ? colors.primary : transparentizeSecondary(props)};
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.thone`
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: ${tabBorder};
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    background-color: ${colors.lightenBackground};
  }
`;
const Highlighter = styled.span`
  display: block;
  background: ${colors.primary};
  width: 2px;
  ${cssTabHeight};
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
  ${transformTab(tabHeight)}
  ${media.thone`
    width: 100%;
    max-width: ${tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 10px;
    ${transformTab(tabWidth)}
    margin-left: 50px;
  `};
  ${media.phablet`
    margin-left: 25px;
    bottom: 10px;
  `};
`;
const ContentContainer = styled.div`
  position: relative;
  padding-top: 12px;
  padding-left: 30px;
  flex-grow: 1;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};
`;
const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : -1)};
  position: ${props => (props.isActive ? 'relative' : 'absolute')};
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  transition: ${theme.transition};
  transition-duration: ${props => (props.isActive ? '0.5s' : '0s')};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.large};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors.primary};
        line-height: ${fontSizes.xlarge};
      }
    }
  }
  a {
    ${mixins.inlineLink};
  }
`;
const TimelineTitle = styled.h4`
  color: ${colors.lightenSecondary};
  font-size: ${fontSizes.xxlarge};
  font-weight: 500;
  margin-bottom: 5px;
`;

const Company = styled.span`
  color: ${colors.primary};
`;

const TimelineDetails = styled.h5`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  letter-spacing: 0.5px;
  color: ${props => lighten(0.1, colors.secondary(props))};
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;
// #endregion

const { heading, id } = content.Timeline;

const Timeline = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const revealContainer = useRef(null);
  const data = useTimeline();

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <TimelineContainer id={id} ref={revealContainer}>
      <Heading>{heading}</Heading>
      <TabsContainer>
        <Tabs role="tablist">
          {data.map(({ company }, i) => (
            <li key={i}>
              <Tab
                isActive={activeTabId === i}
                onClick={() => setActiveTabId(i)}
                role="tab"
                aria-selected={activeTabId === i ? 'true' : 'false'}
                aria-controls={`tab${i}`}
                id={`tab${i}`}>
                <span>{company}</span>
              </Tab>
            </li>
          ))}
          <Highlighter activeTabId={activeTabId} />
        </Tabs>
        <ContentContainer>
          {data.map(({ title, url, company, range, html }, i) => (
            <TabContent
              key={i}
              isActive={activeTabId === i}
              id={`job${i}`}
              role="tabpanel"
              aria-labelledby={`job${i}`}
              aria-hidden={activeTabId !== i}>
              <TimelineTitle>
                <span>{title}</span>
                <Company>
                  <span>{` @ `}</span>
                  <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                    {company}
                  </a>
                </Company>
              </TimelineTitle>
              <TimelineDetails>
                <span>{range}</span>
              </TimelineDetails>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </TabContent>
          ))}
        </ContentContainer>
      </TabsContainer>
    </TimelineContainer>
  );
};

export default Timeline;
