import React from 'react';
import { css } from 'styled-components/macro';
import { typography2 } from './typography2';
import { mobile } from 'mediaQueries';
import usePointer from '../usePointer';

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
};

const A = ({ inParagraph, colorsToAvoid, ...props }) => {
    const { pointerClasses } = usePointer(colorsToAvoid);

    return (
        <a
            css={[styles.root, inParagraph && styles.paragraphVariant]}
            target="_blank"
            rel="noopener noreferrer"
            className={pointerClasses}
            {...props}
        >
            {props.children}
        </a>
    );
};

export default A;
