import React from 'react';

import { About } from '@components';

const data = {
  title: 'About Me',
  skills: ['HTML & CSS-in-JS', 'React', 'Redux', 'Node.js', 'Express', 'GraphQL', 'Figma'],
  html: '<p>About Text</p>',
};

export default {
  title: 'Molecules|About',
};

export const NoAvatar = () => <About {...data} />;
