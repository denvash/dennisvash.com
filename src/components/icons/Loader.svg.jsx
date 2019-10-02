import React from 'react';

const Loader = props => (
  <svg id="loader" fill="none" viewBox="0 0 127 129" {...props}>
    <path
      id="inner"
      d="M63 95L37.02 50h51.96L63 95z"
      stroke="#64FFDA"
      strokeWidth={2}
      strokeMiterlimit={2.9238}
    />
    <path d="M63.5 127L8.507 31.75h109.986L63.5 127z" stroke="#64FFDA" strokeWidth={2} />
  </svg>
);

export default Loader;
