import React, { useEffect, useRef, useState } from 'react';
import { css } from 'styled-components/macro';
import { mobile } from 'mediaQueries';
import { uniqueId } from 'lodash';
import anime from 'animejs';

const baseTriangle = css`
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;

    ${mobile(css`
        height: 550px;
    `)};

    border-left: 400px solid transparent;
    border-right: 400px solid transparent;
    border-bottom: 800px solid transparent;

    ${mobile(css`
        border-left: 75vw solid transparent;
        border-right: 75vw solid transparent;
        border-bottom: 150vw solid transparent;
    `)};

    top: -15%;
    ${mobile(css`
        top: -25%;
    `)};
`;

const color = {
    triangle: {
        pink: css`
            ${baseTriangle};
            transform: rotate(-40deg);
            left: -23%;
            border-bottom-color: ${({ theme }) => theme.color.pink} !important;
        `,
        purple: css`
            ${baseTriangle};
            transform: rotate(16deg);
            left: 10%;
            border-bottom-color: ${({ theme }) =>
                theme.color.purple} !important;
        `,
    },
};

const LargeTriangle = ({ colorVariant }) => {
    const id = useRef(uniqueId('freelance_image')).current;

    const animationId = `freelance-largeTriangle-${id}`;
    const animationTarget = `[data-animation="${animationId}"]`;
    useEffect(() => {
        if (colorVariant === 'pink') {
            anime.set(animationTarget, {
                rotate: -40,
            });
            anime({
                targets: animationTarget,
                rotate: [
                    { value: -38 },
                    { value: -40 },
                    { value: -41 },
                    { value: -40 },
                ],
                scale: [
                    { value: 1.01 },
                    { value: 0.98 },
                    { value: 0.99 },
                    { value: 1 },
                ],
                easing: 'linear',
                loop: true,
                duration: 4200,
            });
        }
        if (colorVariant === 'purple') {
            anime.set(animationTarget, {
                rotate: 16,
            });
            anime({
                targets: animationTarget,
                rotate: [
                    { value: 18 },
                    { value: 16 },
                    { value: 14 },
                    { value: 16 },
                ],
                scale: [
                    { value: 1.01 },
                    { value: 1.02 },
                    { value: 0.99 },
                    { value: 1 },
                ],
                duration: 3600,
                easing: 'linear',
                loop: true,
            });
        }
    }, []);

    return (
        <div data-animation={animationId} css={color.triangle[colorVariant]} />
    );
};

export default LargeTriangle;
