// #region  Imports
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import sr from '@utils/sr';
import { srConfig, email } from '@config';
import { mixins, Section, Heading } from '@styles';
import { useContact } from '@hooks';
// #endregion

// #region  Styling
const ContactContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
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

      <EmailLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
        Say Hello
      </EmailLink>
    </ContactContainer>
  );
};

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default Contact;
