import React from 'react';

import { Featured } from '@components';

const data = [
  {
    title: 'HKube - HPC over Kubernetes',
    tech: ['Node.js', 'React', 'Redux', 'Figma', 'Ant-Design'],
    github: 'https://github.com/kube-HPC/hkube',
    external: 'http://hkube.io/',
    show: 'true',
    html:
      '<p>HKube is a cloud-native open source framework to run distributed pipeline of algorithms built on Kubernetes.</p>\n<p>HKube optimally utilizing pipeline\'s resources, based on user priorities and heuristics.</p>\n<p>HKube provides a web-based <a href="https://github.com/kube-HPC/simulator" target="_blank" rel="nofollow noopener noreferrer">Dashboard</a> which supports its every functionality.</p>',
  },
  {
    title: 'Jesta',
    tech: ['Kotlin', 'Firebase', 'Android', 'Figma'],
    github: 'https://github.com/denvash/jesta-android-app',
    external: 'https://denvash.github.io/jesta-android-app/',
    show: 'true',
    html:
      '<p>Jesta is a social application which connects between people who are willing to take up tasks and people who publish them.</p>',
  },
];

export default {
  title: 'Molecules|Featured',
};

export const Default = () => <Featured data={data} />;
