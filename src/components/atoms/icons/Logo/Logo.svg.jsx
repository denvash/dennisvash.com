import React from 'react';
import PropTypes from 'prop-types';

const IDs = {
  container: 'logo',
  inner: 'inner',
  outer: 'outer',
};

const IconLogo = ({ id = IDs.container, inner = IDs.inner, outer = IDs.outer, ...props }) => (
  <svg id={id} fill="none" viewBox="0 0 200 152" {...props}>
    <path
      fill="none"
      id={inner}
      stroke="white"
      d="M99.217 100.606L58.302 29.74h81.829l-40.914 70.866z"
    />
    <path fill="none" id={outer} stroke="white" d="M100 151L13.398 1h173.205L100 151z" />
  </svg>
);

IconLogo.IDs = IDs;

IconLogo.propTypes = {
  id: PropTypes.string,
  inner: PropTypes.string,
  outer: PropTypes.string,
};

export default IconLogo;
