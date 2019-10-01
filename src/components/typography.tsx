import styled from 'styled-components';
import { Theme, deviceSize, typographyProportions } from 'theme';

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

  color: ${(props: TypographyProps) => getColor(props)};
  text-align: ${(props: TypographyProps) =>
    props.align === 'right' ? 'right' : 'left'};
  margin-top: 0px;

  @media ${deviceSize.mobile} {
    font-size: ${0.5 * typographyProportions.h1}px;
  }
  @media ${deviceSize.tablet} {
    font-size: ${0.75 * typographyProportions.h1}px;
  }
  @media ${deviceSize.small} {
    font-size: ${1 * typographyProportions.h1}px;
  }
  @media ${deviceSize.medium} {
    font-size: ${1.5 * typographyProportions.h1}px;
  }
  @media ${deviceSize.large} {
    font-size: ${2 * typographyProportions.h1}px;
  }
`;

export const H2 = styled.h2`
  font-family: 'Josefin Sans', sans-serif;

  color: ${(props: TypographyProps) => getColor(props)};
  text-align: ${(props: TypographyProps) =>
    props.align === 'right' ? 'right' : 'left'};
  margin-top: 0px;

  @media ${deviceSize.mobile} {
    font-size: ${0.5 * typographyProportions.h2}px;
  }
  @media ${deviceSize.tablet} {
    font-size: ${0.75 * typographyProportions.h2}px;
  }
  @media ${deviceSize.small} {
    font-size: ${1 * typographyProportions.h2}px;
  }
  @media ${deviceSize.medium} {
    font-size: ${1.5 * typographyProportions.h2}px;
  }
  @media ${deviceSize.large} {
    font-size: ${2 * typographyProportions.h2}px;
  }
`;

export const H3 = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 40px;
  color: ${(props: TypographyProps) => getColor(props, 'dark')};
  text-align: ${(props: TypographyProps) =>
    props.align ? props.align : 'left'};
  margin-top: 0px;

  @media ${deviceSize.mobile} {
    font-size: ${0.5 * typographyProportions.h3}px;
  }
  @media ${deviceSize.tablet} {
    font-size: ${0.75 * typographyProportions.h3}px;
  }
  @media ${deviceSize.small} {
    font-size: ${1 * typographyProportions.h3}px;
  }
  @media ${deviceSize.medium} {
    font-size: ${1.5 * typographyProportions.h3}px;
  }
  @media ${deviceSize.large} {
    font-size: ${2 * typographyProportions.h3}px;
  }
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
