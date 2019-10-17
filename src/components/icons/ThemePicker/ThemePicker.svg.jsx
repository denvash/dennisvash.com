import React from 'react';
import PropTypes from 'prop-types';

const IDs = {
  container: 'container',
  outer: 'outer',
  up: 'up',
  down: 'down',
};

const IconThemePicker = ({ container = IDs.container, up = IDs.up, down = IDs.down, ...props }) => (
  <svg id={container} viewBox="0 0 102 90" fill="none" {...props}>
    <path id={up} d="M49.757.89l24.049 41.341L0 87.534 49.757.891z" />
    <path id={down} d="M76.35 47.83L100 87.934H0L76.35 47.83z" />
  </svg>
);

IconThemePicker.IDs = IDs;

IconThemePicker.propTypes = {
  container: PropTypes.string,
  up: PropTypes.string,
  down: PropTypes.string,
  outer: PropTypes.string,
};

export default IconThemePicker;
