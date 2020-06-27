import React from 'react';
import { css } from 'styled-components/macro';
import useWiggle from './useWiggle';
import { mobile } from 'mediaQueries';

const styles = {
    root: css`
        position: absolute;
        z-index: -1;
        bottom: -30%;
        left: -10%;

        width: 300px;
        height: 300px;

        ${mobile(css`
            display: none;
        `)};

        .cls-1 {
            fill: #cfcfcf;
        }
        .cls-2 {
            fill: #efefef;
        }
        .cls-3 {
            fill: #333;
        }
    `,
};

const Logo = () => {
    const animationId = useWiggle('bio-greySquare', { rotation: -19 });
    return (
        <svg
            css={styles.root}
            data-animation={animationId}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
        >
            <g id="background">
                <path
                    className="cls-1"
                    d="M59.56,69.27c0,13.86-11.32,25.14-25.45,25.53l-.77,0a26.87,26.87,0,0,1-9.15-1.6,25.59,25.59,0,0,1-17.07-24,25.19,25.19,0,0,1,8.46-18.79,26.34,26.34,0,0,1,8.72-5.2,26.69,26.69,0,0,1,8.09-1.54l1,0A26.66,26.66,0,0,1,44.15,46a26.2,26.2,0,0,1,5.58,3.34,25.77,25.77,0,0,1,5.5,5.87A25,25,0,0,1,59.56,69.27Z"
                />
                <polygon
                    className="cls-2"
                    points="99.61 52.45 82.89 59.8 70.86 65.09 55.42 71.88 51.72 63.45 34.78 24.92 34.75 24.84 78.93 5.41 87.5 24.92 92.81 36.99 99.61 52.45"
                />
            </g>
            <g id="TYPE">
                <path
                    className="cls-3"
                    d="M11.33,6.9A6.48,6.48,0,0,0,6.86,5.18,6.69,6.69,0,0,0,2.34,6.94,5.5,5.5,0,0,0,.39,11.25a5.53,5.53,0,0,0,2,4.28,6.65,6.65,0,0,0,4.53,1.72,6.47,6.47,0,0,0,4.46-1.76,5.55,5.55,0,0,0,1.9-4.3A5.58,5.58,0,0,0,11.33,6.9Zm22.4,59.58c-2.28-5-4.45-10-6.67-15-.92-2.07-1.83-4.13-2.76-6.2q-2.6-5.87-5.2-11.73-1.94-4.33-3.86-8.68L5.27,25,15.58,50.48,24.73,73.1c2.87,6.45,2.06,14.64-.54,20.12a26.87,26.87,0,0,0,9.15,1.6l.77,0C38.84,86.31,37.64,75.07,33.73,66.48Z"
                />
                <path
                    className="cls-3"
                    d="M87.5,24.92h-.11L75.21,54.74l-13-29.82H52.82l3.82,8.24L47.71,54,34.83,24.92H24.15L46.43,75.86l5.29-12.41L60.47,42.9,70.86,65.09l12-5.29L92.81,37Z"
                />
            </g>
        </svg>
    );
};

export default Logo;
