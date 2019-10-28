// #region  imports
import { srConfig, content } from '@config';
import { useTimeline } from '@hooks';
import { Event, Events, Timeline as ReactTimeline } from '@merc/react-timeline';
import { mixins, theme, Heading, Section, media } from '@styles';
import sr from '@utils/sr';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// #endregion

const { colors, fontSizes, fonts } = theme;

const Title = styled.h1`
  font-size: ${fontSizes.xlarge};
  font-weight: 400;
  span {
    color: ${colors.primary};
  }
  a {
    ${mixins.inlineLink}
    &:after {
      background-color: ${colors.primary};
    }
    color: ${colors.primary};
  }
`;

const Range = styled.h2`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  letter-spacing: 0.5px;
`;

const EventDetails = styled.div`
  ${mixins.boxShadowSmall}
  background-color: ${colors.backgroundContrastDark};
  padding: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const EventContent = styled.div`
  ${mixins.boxShadowSmall};
  width: fit-content;
  padding: 25px;
  background-color: ${colors.backgroundContrast};
  ul {
    font-size: ${fontSizes.large};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '⬡';
        position: absolute;
        left: 0;
        color: ${colors.primary};
        line-height: ${fontSizes.xlarge};
      }
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
  a {
    ${mixins.inlineLink};
  }
  ${EventDetails} {
    display: none;
    @media (max-width: 768px) {
      background-color: transparent;
      display: block;
    }
  }
`;

const TimelineContainer = styled(Section)`
  position: relative;
  max-width: none;

  ${Heading} {
    justify-content: center;
  }
`;

const ThemedTimeline = styled(ReactTimeline)`
  .timeline::after {
    background-color: ${colors.primary};
  }
`;

const Marker = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${colors.secondary};
  transition: ${theme.transition};

  :hover {
    box-shadow: 0px 0px 4px 0px ${colors.secondary};
  }
`;

const deltaReveal = delta => (ref, i) => sr.reveal(ref, srConfig((i + delta) * 100));
const revealsInitial = { content: [], details: [] };

const Timeline = () => {
  const reveals = useRef(revealsInitial);

  useEffect(() => {
    const { content, details } = reveals.current;
    content.forEach(deltaReveal(5));
    details.forEach(deltaReveal(1));
  }, []);

  const events = useTimeline();

  return (
    <TimelineContainer>
      <Heading>{content.Timeline.heading}</Heading>
      <ThemedTimeline>
        <Events>
          {events.map(({ title, url, company, range, html }, i) => {
            const eventDetails = (
              <EventDetails ref={el => (reveals.current.details[i] = el)}>
                <Range>{range}</Range>
                <Title>
                  {title}
                  <span>{` @ `}</span>
                  <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                    {company}
                  </a>
                </Title>
              </EventDetails>
            );

            const card = () => (
              <EventContent key={i} ref={el => (reveals.current.content[i] = el)}>
                {eventDetails}
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </EventContent>
            );

            const date = () => eventDetails;
            const marker = () => <Marker ref={el => (reveals.current.details[i] = el)} />;
            return <Event key={i} date={date} card={card} marker={marker} />;
          })}
        </Events>
      </ThemedTimeline>
    </TimelineContainer>
  );
};

export default Timeline;
