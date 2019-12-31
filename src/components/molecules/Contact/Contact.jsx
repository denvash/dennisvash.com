// #region  Imports
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import sr from '@utils/sr';
import { srConfig, email } from '@config';
import { mixins, Section, Heading, theme } from '@styles';
import { useContact } from '@hooks';
// #endregion

const { colors } = theme;

// #region  Styling
const ContactContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
`;
const ResumeLink = styled.a`
  ${mixins.bigButton};
  margin-top: 20px;
  &:hover,
  &:focus {
    color: ${colors.primary};
  }
`;
// #endregion

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  const { title, html } = useContact();

  return (
    <ContactContainer id="contact" ref={revealContainer}>
      <Heading>{title}</Heading>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <ResumeLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
        Say Hello
      </ResumeLink>
    </ContactContainer>
  );
};

export default Contact;
