import React from 'react';
import styled from 'styled-components';
import Button from './Button.styles';
import { mixins } from '@styles';

const Container = styled.div`
  height: 200px;
`;

const decorator = Story => (
  <Container>
    <Story />
  </Container>
);

export default {
  title: 'Atoms|Button',
  decorators: [decorator],
};

const Small = styled(Button)`
  ${mixins.smallButton};
`;

export const Default = () => <Button>Default</Button>;
export const SmallButton = () => <Small>With Mixin</Small>;
