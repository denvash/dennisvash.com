import React from 'react';

import { Contact } from '@components';

const data = {
  title: 'Lets Talk!',
  html:
    "<p>Whether for a potential project, web, open source or any computer science topic, I'll glad to talk!</p>",
};

export default {
  title: 'Molecules|Contact',
};

export const Default = () => <Contact {...data} />;
