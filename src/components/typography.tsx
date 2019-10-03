import styled, { css } from 'styled-components';
import {
  Theme,
  deviceSize,
  typographyProportions,
  TypographyTypes,
  Proportions,
  elementProportions, MarginProportions, marginProportions,
} from "theme"

type Color = 'accent' | 'light' | 'medium' | 'dark';
type Alignment = 'right' | 'left';

export interface TypographyProps {
  theme: Theme;
  color?: Color;
  textAlign?: Alignment;
  horizontalTransform?: Proportions;
  marginRight?: Proportions;
}

const getHorizontalTransform = (
  props: TypographyProps,
  defaultProportion: Proportions = 'na'
): string =>
  `${props.textAlign === 'right' ? '' : '-'}${
    props.horizontalTransform
      ? elementProportions[props.horizontalTransform]
      : elementProportions[defaultProportion]
  }px`;

const getColor = (
  props: TypographyProps,
  defaultColor: Color = 'dark'
): string => {
  return props.color
    ? props.theme.color[props.color]
    : props.theme.color[defaultColor];
};

const getMargin = (
  props: TypographyProps,
  defaultMargin: Proportions = 'na'
): number => {
  return props.marginRight
    ? marginProportions[props.marginRight]
    : marginProportions[defaultMargin];
};


const TypographyBase = css`
  font-family: 'Josefin Sans', sans-serif;
  text-align: ${(props: TypographyProps) =>
    props.textAlign === 'right' ? 'right' : 'left'};
  color: ${(props: TypographyProps) => getColor(props)};
  transform: translateX(
    ${(props: TypographyProps) => getHorizontalTransform(props)}
  );
  margin-right: ${(props: TypographyProps) => getMargin(props)}px;
  margin-top: 0;
`;

const TypographyMediaQueryBase = (typographyType: TypographyTypes) => {
  return css`
    @media ${deviceSize.mobile} {
      font-size: ${0.5 * typographyProportions[typographyType]}px;
    }
    @media ${deviceSize.tablet} {
      font-size: ${0.75 * typographyProportions[typographyType]}px;
    }
    @media ${deviceSize.small} {
      font-size: ${typographyProportions[typographyType]}px;
    }
    @media ${deviceSize.medium} {
      font-size: ${1.5 * typographyProportions[typographyType]}px;
    }
    @media ${deviceSize.large} {
      font-size: ${2 * typographyProportions[typographyType]}px;
    }
  `;
};

export const H1 = styled.h1<TypographyProps>`
  ${TypographyBase}
  ${TypographyMediaQueryBase('h1')}
`;

export const H2 = styled.h2<TypographyProps>`
  ${TypographyBase}
  ${TypographyMediaQueryBase('h2')}
`;

export const H3 = styled.h3<TypographyProps>`
  ${TypographyBase}
  ${TypographyMediaQueryBase('h3')}
`;

export const H4 = styled.h4<TypographyProps>`
  ${TypographyBase}
  ${TypographyMediaQueryBase('h4')}
`;

export const P = styled.p<TypographyProps>`
  ${TypographyBase}
  ${TypographyMediaQueryBase('p')}
`;

export const A = styled.a<TypographyProps>`  
  ${TypographyBase}
  ${TypographyMediaQueryBase('a')}
  color: ${(props: TypographyProps) => getColor(props, 'light')};
  margin-bottom: 16px;
  display: inline-block;
  text-decoration: none;
  background-color: ${(props: TypographyProps) => getColor(props, 'dark')};
  padding: 4px;  
`;

export const Li = styled.li<TypographyProps>`
  ${TypographyBase}
  ${TypographyMediaQueryBase('li')}
  list-style-type: none;
  margin-bottom: 16px;
`;
