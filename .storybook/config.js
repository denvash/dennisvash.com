import React, { useContext } from 'react';

import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import { radios, withKnobs } from '@storybook/addon-knobs';
import { ThemeContext } from 'styled-components';

import GlobalStyle from '../src/styles/GlobalStyle.styles';
import ThemeProvider from '../src/components/ThemeProvider';

const label = 'Themes';
const options = {
  Hack: '0',
  SummerTime: '1',
};
const defaultValue = options.Hack;

const Container = ({ children }) => {
  const controlledIndex = radios(label, options, defaultValue);
  const { setIndex } = useContext(ThemeContext);
  setIndex(controlledIndex);
  return <>{children}</>;
};

addDecorator(withKnobs);
addDecorator(S => {
  return (
    <ThemeProvider>
      <Container>
        <GlobalStyle />
        <S />
      </Container>
    </ThemeProvider>
  );
});

addParameters({
  options: {
    panelPosition: 'bottom',
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
    theme: themes.dark,
  },
});

// automatically import all files ending in *.stories.jsx
configure(require.context('../src', true, /\.stories\.jsx$/), module);

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};
