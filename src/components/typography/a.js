import React, { useRef } from 'react';
import { css } from 'styled-components/macro';
import { typography2 } from './typography2';
import { mobile } from 'mediaQueries';

const styles = {
    root: css`
        ${typography2.link};
        display: inline-block;
        text-decoration: none;
        user-select: none;

        ${mobile(css`
            &:focus {
                outline: none;
            }

            &:focus > * {
                opacity: 1;
            }
        `)};
    `,
    paragraphVariant: css`
        ${typography2.text};
        color: inherit;

        padding: 0;
    `,
    colorBlock: css`
        z-index: -1;
        opacity: 0;
        transition: opacity 200ms;
        position: absolute;
        width: 70px;
        height: 70px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        ${props => {
            props.shape === 'square'
                ? css`
                      border-radius: 0;
                      transform: scale(3);
                  `
                : css`
                      transform: scale(3);
                  `;
        }}};

        background-color: ${({ theme, color }) => theme.color[color]};
    `,
};

const A = ({ inParagraph, colorsToAvoid, css, ...props }) => {
    const shapeList = ['circle', 'square'];
    const colorList = [
        'blue',
        'orange',
        'green',
        'purple',
        'pink',
        'yellow',
    ].filter(colorIndex =>
        colorsToAvoid ? !colorsToAvoid.includes(colorIndex) : true
    );

    const state = useRef({
        color: colorList[Math.floor(Math.random() * colorList.length)],
        shape: shapeList[Math.floor(Math.random() * shapeList.length)],
    }).current;

    return (
        <a
            css={[styles.root, inParagraph && styles.paragraphVariant, css]}
            target="_blank"
            rel="noopener noreferrer"
            className={`${state.shape} ${state.color}`}
            {...props}
        >
            <div
                css={styles.colorBlock}
                color={state.color}
                shape={state.shape}
            />
            {props.children}
        </a>
    );
};

export default A;
