import React from 'react';
import Nav from './Nav';

export default {
  title: 'Molecules|Nav',
};

const paragraph = `Lorem ipsum mollis lacinia sollicitudin adipiscing interdum elit lobortis felis egestas,
vehicula conubia lacinia tempus bibendum et gravida eu curae rutrum, amet senectus sit felis
nulla urna nullam lorem class pharetra sapien aenean commodo.`;

const N = 50;

export const Default = () => <Nav />;
export const Scrollable = () => (
  <>
    <Nav />
    {[...Array(N).keys()].fill(<p>{paragraph}</p>)}
  </>
);
