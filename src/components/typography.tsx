import styled, { css } from 'styled-components';
import { Theme, deviceSize, ElementSizesUnion } from 'theme';

export type Color =
  | 'fun1'
  | 'fun2'
  | 'fun3'
  | 'fun4'
  | 'fun5'
  | 'fun6'
  | 'light'
  | 'medium'
  | 'dark';
export type Alignment = 'right' | 'left';

export interface TypographyProps {
  theme: Theme;
  color?: Color;
  textAlign?: Alignment;
  horizontalTransform?: ElementSizesUnion;
  marginRight?: ElementSizesUnion;
  marginLeft?: ElementSizesUnion;
}

const getHorizontalTransform = (
  props: TypographyProps,
  defaultProportion: ElementSizesUnion = 'na'
): string =>
  `${props.textAlign === 'right' ? '' : '-'}${
    props.horizontalTransform
      ? props.theme.elementSizes[props.horizontalTransform]
      : props.theme.elementSizes[defaultProportion]
  }px`;

const getColor = (
  props: TypographyProps,
  defaultColor: Color = 'dark'
): string => {
  return props.color
    ? props.theme.color[props.color]
    : props.theme.color[defaultColor];
};

const getMarginRight = (
  props: TypographyProps,
  defaultMargin: ElementSizesUnion = 'na'
): number => {
  return props.marginRight
    ? props.theme.elementSizes[props.marginRight]
    : props.theme.elementSizes[defaultMargin];
};
const getMarginLeft = (
  props: TypographyProps,
  defaultMargin: ElementSizesUnion = 'na'
): number => {
  return props.marginLeft
    ? props.theme.elementSizes[props.marginLeft]
    : props.theme.elementSizes[defaultMargin];
};

const TypographyBase = css`
  font-family: 'Josefin Sans', sans-serif;
  text-align: ${(props: TypographyProps) =>
    props.textAlign === 'right' ? 'right' : 'left'};
  color: ${(props: TypographyProps) => getColor(props)};

  margin-right: ${(props: TypographyProps) => getMarginRight(props)}px;
  margin-left: ${(props: TypographyProps) => getMarginLeft(props)}px;
  margin-top: 0;
`;

export const H1 = styled.h1<TypographyProps>`
  ${TypographyBase}
  
  @media ${deviceSize.mobile} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.tablet} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.small} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl * 3}px;
  };
  @media ${deviceSize.medium} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.large} {
    transform: translateX(      ${(props: TypographyProps) =>
      getHorizontalTransform(props)}    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
`;

export const H2 = styled.h2<TypographyProps>`
  ${TypographyBase}
  @media ${deviceSize.mobile} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.tablet} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.small} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  };
  @media ${deviceSize.medium} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.large} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
`;

export const H3 = styled.h3<TypographyProps>`
  ${TypographyBase}
   @media ${deviceSize.mobile} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.tablet} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.small} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) =>
      props.theme.elementSizes.xl * 1.5}px;
  };
  @media ${deviceSize.medium} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.large} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
`;

export const H4 = styled.h4<TypographyProps>`
  ${TypographyBase}
   @media ${deviceSize.mobile} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.tablet} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.small} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  };
  @media ${deviceSize.medium} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.large} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
`;

export const P = styled.p<TypographyProps>`
  ${TypographyBase}
   @media ${deviceSize.mobile} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.tablet} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.small} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  };
  @media ${deviceSize.medium} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.large} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
`;

export const A = styled.a<TypographyProps>`  
  ${TypographyBase}
   @media ${deviceSize.mobile} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.tablet} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.md}px;
  }
  @media ${deviceSize.small} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.md}px;
  };
  @media ${deviceSize.medium} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.md}px;
  }
  @media ${deviceSize.large} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.md}px;
  }
  color: ${(props: TypographyProps) => getColor(props, 'dark')};
  font-weight: bold;
  margin-bottom: 16px;
  display: inline-block;
  text-decoration: none;
  padding: 4px;  
`;

export const Li = styled.li<TypographyProps>`
  ${TypographyBase}
   @media ${deviceSize.mobile} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.tablet} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.small} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  };
  @media ${deviceSize.medium} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  @media ${deviceSize.large} {
    transform: translateX(
      ${(props: TypographyProps) => getHorizontalTransform(props)}
    );
    font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
  }
  list-style-type: none;
  margin-bottom: 16px;
`;
