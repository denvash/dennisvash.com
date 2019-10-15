import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { theme } from '@styles';
import { LOCAL_STORAGE_KEYS, setLSItem, getNumberLSItem } from '@utils';

const palettes = theme.palettes.map(({ name }) => name);

const indexFromLS = getNumberLSItem(LOCAL_STORAGE_KEYS.USER_THEME);

const ThemeProvider = ({ children }) => {
  const [index, setIndex] = useState(() => indexFromLS);

  useEffect(() => {
    setLSItem(LOCAL_STORAGE_KEYS.USER_THEME, index);
  }, [index]);

  const modeToggle = () => setIndex(index => (index === palettes.length - 1 ? 0 : index + 1));

  return (
    <SCThemeProvider
      theme={{
        mode: palettes[index],
        modeToggle,
        setIndex,
      }}>
      {children}
    </SCThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  controlledIndex: PropTypes.number,
};

export default ThemeProvider;
