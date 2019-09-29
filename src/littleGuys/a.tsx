import styled from 'styled-components';

import { Theme } from 'theme';

export interface RotatedProps {
  theme: Theme;
  direction: 'right' | 'left';
}

export const Rotated = styled.div`
  display: inline-block;
  transform: rotate(
    ${(props: RotatedProps) =>
      props.direction === 'right' ? '90deg' : '-90deg'}
  );
`;

export interface FlexProps {
  direction: 'column' | 'row';

  justify:
    | 'start'
    | 'end'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'inherit';

  align: 'start' | 'end' | 'center' | 'flex-start' | 'flex-end' | 'inherit';
}

export const Flex = styled.div`
  display: flex;
  align-items: ${(props: FlexProps) => props.align};
  justify-content: ${(props: FlexProps) => props.justify};
`;
