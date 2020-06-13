import React from 'react';
import styled, { css } from 'styled-components';

export const getHorizontalTransform = (props, defaultProportion = 'na') =>
    `${props.textAlign === 'right' ? '' : '-'}${
        props.horizontalTransform
            ? props.theme.elementSizes[props.horizontalTransform]
            : props.theme.elementSizes[defaultProportion]
    }px`;

export const getColor = (props, defaultColor = 'dark') => {
    return props.color
        ? props.theme.color[props.color]
        : props.theme.color[defaultColor];
};

export const TypographyBase = css`
    font-family: 'Josefin Sans', sans-serif;
    text-align: ${props => (props.textAlign === 'right' ? 'right' : 'left')};
    color: ${props => getColor(props)};
    z-index: 5;
    margin-right: ${({ marginRight, theme: { elementSizes } }) =>
        marginRight ? elementSizes[marginRight] : elementSizes.na}px;
    margin-bottom: ${({ marginBottom, theme: { elementSizes } }) =>
        marginBottom ? elementSizes[marginBottom] : 'inherit'}px;
    margin-left: ${({ marginLeft, theme: { elementSizes } }) =>
        marginLeft ? elementSizes[marginLeft] : elementSizes.na}px;
    margin-top: 0;
`;

export const H1 = styled.h1`
    ${TypographyBase};
    @media (max-width: 575px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl * 1.5}px;
    }
    @media (min-width: 571px) and (max-width: 1100px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl * 3}px;
    }
    @media (min-width: 1101px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl * 3}px;
    }
    @media (min-width: 1921px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl * 4}px;
    }
    @media (min-width: 2561px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl * 7}px;
    }
`;

export const H2 = styled.h2`
    ${TypographyBase};
    @media (max-width: 575px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 571px) and (max-width: 1100px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 1101px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 1921px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 2561px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
`;

export const H3 = styled.h3`
    ${TypographyBase};
    @media (max-width: 575px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 571px) and (max-width: 1100px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl * 1.5}px;
    }
    @media (min-width: 1101px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl * 1.5}px;
    }
    @media (min-width: 1921px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl * 2.5}px;
    }
    @media (min-width: 2561px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl * 4}px;
    }
`;

export const H4 = styled.h4`
    ${TypographyBase};
    @media (max-width: 575px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.lg}px;
    }
    @media (min-width: 571px) and (max-width: 1100px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 1101px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 1921px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl * 1.5}px;
    }
    @media (min-width: 2561px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl * 2.5}px;
    }
`;

export const P = styled.p`
    ${TypographyBase};
    line-height: 1.2;
    @media (max-width: 575px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.md}px;
    }
    @media (min-width: 571px) and (max-width: 1100px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.md}px;
    }
    @media (min-width: 1101px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.md}px;
    }
    @media (min-width: 1921px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 2561px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.lg * 2}px;
    }
`;
export const MarkdownP = styled(P)`
    margin-bottom: 16px;
    text-align: right;
`;

export const Li = styled.li`
    ${TypographyBase};
    @media (max-width: 575px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 571px) and (max-width: 1100px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 1101px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 1921px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    @media (min-width: 2561px) {
        transform: translateX(${props => getHorizontalTransform(props)});
        font-size: ${props => props.theme.elementSizes.xl}px;
    }
    list-style-type: none;
    margin-bottom: 16px;
`;
