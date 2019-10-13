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

const Big = styled.div`
  ${mixins.bigButton};
  max-width: fit-content;
`;

const Small = styled.div`
  ${mixins.smallButton};
  max-width: fit-content;
`;

export const Default = () => <Button>Default</Button>;
export const BigButton = () => <Big>With Mixin</Big>;
export const SmallButton = () => <Small>With Mixin</Small>;
