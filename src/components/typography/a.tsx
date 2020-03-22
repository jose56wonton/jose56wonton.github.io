import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    getColor,
    getHorizontalTransform,
    TypographyBase,
    TypographyProps,
} from './typography';

const Root = styled.a<TypographyProps>`
    ${TypographyBase};

    @media (max-width: 575px) {
        transform: translateX(
            ${(props: TypographyProps) => getHorizontalTransform(props)}
        );
        font-size: ${(props: TypographyProps) =>
            props.theme.elementSizes.sm * 1.5}px;
    }
    @media (min-width: 571px) and (max-width: 1100px) {
        transform: translateX(
            ${(props: TypographyProps) => getHorizontalTransform(props)}
        );
        font-size: ${(props: TypographyProps) =>
            props.theme.elementSizes.sm * 1.2}px;
    }
    @media (min-width: 1101px) {
        transform: translateX(
            ${(props: TypographyProps) => getHorizontalTransform(props)}
        );
        font-size: ${(props: TypographyProps) => props.theme.elementSizes.md}px;
    }
    @media (min-width: 1921px) {
        transform: translateX(
            ${(props: TypographyProps) => getHorizontalTransform(props)}
        );
        font-size: ${(props: TypographyProps) => props.theme.elementSizes.lg}px;
    }
    @media (min-width: 2561px) {
        transform: translateX(
            ${(props: TypographyProps) => getHorizontalTransform(props)}
        );
        font-size: ${(props: TypographyProps) => props.theme.elementSizes.xl}px;
    }
    color: ${(props: TypographyProps) => getColor(props, 'dark')};
    font-weight: bold;
    margin-bottom: 16px;
    display: inline-block;
    text-decoration: none;
    padding: 4px;
    user-select: none;
`;

export type ColorType = 1 | 2 | 3 | 4 | 5 | 6;
export type ShapeType = 1 | 2 | 3;

const shapeList: ShapeType[] = [1, 2, 3];
const colorList: ColorType[] = [...shapeList, 4, 5, 6];

const getRandomShape = (): ShapeType => {
    return shapeList[Math.floor(Math.random() * shapeList.length)];
};
const getRandomColor = (): ColorType => {
    return colorList[Math.floor(Math.random() * colorList.length)];
};

interface LinkState {
    color: 1 | 2 | 3 | 4 | 5 | 6;
    shape: 1 | 2 | 3;
}

const A: React.FC<any> = props => {
    const [state, setState] = useState<LinkState>({ color: 1, shape: 1 });

    const randomize = () =>
        setState({
            color: getRandomColor(),
            shape: getRandomShape(),
        });

    useEffect(() => {
        randomize();
    }, []);

    return (
        <Root
            {...props}
            className={`shape-${state.shape} color-${state.color}`}
            onClick={e => {
                props.onClick(e);
                randomize();
            }}
        />
    );
};

export default A;
