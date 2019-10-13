import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '@styles';

const { colors } = theme;

const defaultProps = {
  id: 'loader',
  inner: {
    id: 'inner',
    color: colors.green,
  },
  outer: {
    id: 'outer',
    color: colors.green,
  },
};

const IconLogo = ({
  id = defaultProps.id,
  inner = defaultProps.inner,
  outer = defaultProps.outer,
  ...props
}) => (
  <svg id={id} fill="none" viewBox="0 0 200 152" {...props}>
    <path
      fill="none"
      id={inner.id}
      stroke={inner.color}
      d="M99.217 100.606L58.302 29.74h81.829l-40.914 70.866z"
    />
    <path fill="none" id={outer.id} stroke={outer.color} d="M100 151L13.398 1h173.205L100 151z" />
  </svg>
);

IconLogo.propTypes = {
  id: PropTypes.string,
  inner: PropTypes.object,
  outer: PropTypes.object,
};

export default IconLogo;
