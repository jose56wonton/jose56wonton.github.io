import styled from 'styled-components';

import { Theme } from 'theme';

export interface FlexProps {
  direction?: 'column' | 'row';

  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'inherit';

  align?: 'start' | 'end' | 'center' | 'flex-start' | 'flex-end' | 'inherit';

  wrap?: 'wrap' | 'nowrap';
}

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props: FlexProps) => props.direction};
  align-items: ${(props: FlexProps) => props.align};
  justify-content: ${(props: FlexProps) => props.justify};
  flex-wrap: ${(props: FlexProps) => props.wrap};
`;
