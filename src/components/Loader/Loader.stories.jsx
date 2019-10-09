import React from 'react';
import Loader from './Loader';

export default {
  title: 'Molecules|Logo',
};

export const OnStart = () => <Loader />;
export const Loop = () => <Loader parameters={{ loop: true }} />;
