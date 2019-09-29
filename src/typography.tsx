import styled, { CSSProp } from 'styled-components';
import { Theme } from 'theme';

export interface TypographyProps {
  theme: Theme;
  align?: 'left' | 'right' | 'center';
}

export const H1 = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 200px;
  color: ${(props: TypographyProps) => props.theme.color.dark};
  text-align: ${(props: TypographyProps) =>
    props.align ? props.align : 'left'};
`;

export const H3 = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 40px;
  color: ${(props: TypographyProps) => props.theme.color.dark};
  text-align: ${(props: TypographyProps) =>
    props.align ? props.align : 'left'};
`;

export const A = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 20px;
  color: ${(props: TypographyProps) => props.theme.color.medium};
  text-align: ${(props: TypographyProps) =>
    props.align ? props.align : 'left'};
  margin: 0 16px;
  text-decoration: none;
`;
