import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ inner, outer, ...props }) => (
  <svg fill="none" viewBox="0 0 200 200" {...props}>
    <path id={inner.id} d="M63 95L37.02 50h51.96L63 95z" stroke={inner.color} />
    <path id={outer.id} d="M63.5 127L8.507 31.75h109.986L63.5 127z" stroke={outer.color} />
  </svg>
);

Loader.defaultProps = {
  id: 'loader',
  inner: {
    id: 'inner',
    color: '#64FFDA',
  },
  outer: {
    id: 'outer',
    color: '#64FFDA',
  },
};

Loader.propTypes = {
  inner: PropTypes.object,
  outer: PropTypes.object,
};

export default Loader;
