import React from 'react';

import { Jobs } from '@components';

const data = [
  {
    title: 'string',
    company: 'string',
    location: 'string',
    range: 'string',
    url: 'url link',
    html: 'html string',
  },
  {
    title: 'string',
    company: 'string',
    location: 'string',
    range: 'string',
    url: 'url link',
    html: 'html string',
  },
];

export default {
  title: 'Molecules|Jobs',
};

export const Default = () => <Jobs data={data} />;
