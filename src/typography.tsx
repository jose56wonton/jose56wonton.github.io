import styled, { CSSProp } from 'styled-components';
import { Theme } from 'theme';

type Color = 'accent' | 'light' | 'medium' | 'dark';
export interface TypographyProps {
  theme: Theme;
  color?: Color;
  align?: 'left' | 'right';
}

const getColor = (
  props: TypographyProps,
  defaultColor: Color = 'dark'
): string => {
  return props.color
    ? props.theme.color[props.color]
    : props.theme.color[defaultColor];
};

export const H1 = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 200px;
  color: ${(props: TypographyProps) => getColor(props)};
  text-align: ${(props: TypographyProps) =>
    props.align === 'right' ? 'right' : 'left'};
  transform: translateX(
    ${(props: TypographyProps) => {
      const { innerBox, outerBox } = props.theme;
      const distanceFromEdge = innerBox.padding + outerBox.padding;
      return props.align === 'right'
        ? `${distanceFromEdge}px`
        : `-${distanceFromEdge}px`;
    }}
  );
  margin-top: 0px;
`;

export const H3 = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 40px;
  color: ${(props: TypographyProps) => getColor(props, 'dark')};
  text-align: ${(props: TypographyProps) =>
    props.align ? props.align : 'left'};
  margin-top: 0px;
`;

export const P = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 20px;
  color: ${(props: TypographyProps) => getColor(props, 'dark')};
  margin: 0 8px;
  text-align: ${(props: TypographyProps) =>
    props.align ? props.align : 'left'};
`;

export const A = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 20px;
  color: ${(props: TypographyProps) => getColor(props, 'light')};
  text-align: ${(props: TypographyProps) =>
    props.align ? props.align : 'left'};
  margin: 0 16px;
  text-decoration: none;
`;

export const Li = styled.li`
  font-family: 'Josefin Sans', sans-serif;
  list-style-type: none;
  font-size: 20px;
  margin-bottom: 16px;
`;
