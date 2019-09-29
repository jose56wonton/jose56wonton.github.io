import { Theme } from 'theme';
import styled from 'styled-components';

const ColorBlock = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.color.accent};
  position: relative;
  height: 100%;
  width: 100%;
  padding: 50px;
`;
