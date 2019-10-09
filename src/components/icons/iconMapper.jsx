import {
  IconCodesandbox,
  IconGithub,
  IconLinkedin,
  IconStackOverflow,
  IconTwitter,
  IconDev,
} from '@components/icons';
import React from 'react';
import { socialMedia } from '@config';

const { GITHUB, CODESANDBOX, DEV, LINKEDIN, STACK_OVERFLOW, TWITTER } = socialMedia;

const iconMapper = {
  [GITHUB.name]: <IconGithub />,
  [STACK_OVERFLOW.name]: <IconStackOverflow />,
  [CODESANDBOX.name]: <IconCodesandbox />,
  [DEV.name]: <IconDev />,
  [LINKEDIN.name]: <IconLinkedin />,
  [TWITTER.name]: <IconTwitter />,
};

export default iconMapper;
