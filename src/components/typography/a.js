import React, { useRef } from 'react';
import { css } from 'styled-components/macro';
import { typography2 } from './typography2';

const styles = {
    root: css`
        ${typography2.link};
        display: inline-block;
        text-decoration: none;
        user-select: none;
    `,
};

const A = props => {
    const shapeList = [1, 2, 3];
    const colorList = [...shapeList, 4, 5, 6].filter(
        colorIndex => colorIndex !== props.colorToAvoid
    );

    const state = useRef({
        color: colorList[Math.floor(Math.random() * colorList.length)],
        shape: shapeList[Math.floor(Math.random() * shapeList.length)],
    }).current;

    return (
        <a
            css={styles.root}
            className={`shape-${state.shape} color-${state.color}`}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        />
    );
};

export default A;
