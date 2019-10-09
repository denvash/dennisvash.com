import React from 'react';

import { Hero } from '@components';

const data = {
  title: 'Hi, my name is',
  name: 'Dennis Vash',
  subtitle: 'I create things for the web.',
  contactText: 'Get In Touch',
  html: 'html string',
};

export default {
  title: 'Molecules|Hero',
};

export const NoAvatar = () => <Hero {...data} />;
