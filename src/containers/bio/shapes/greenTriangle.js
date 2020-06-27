import React from 'react';
import { css } from 'styled-components/macro';
import useWiggle from './useWiggle';
import { mobile } from 'mediaQueries';

const styles = {
    root: css`
        position: absolute;
        z-index: -1;
        top: -4%;
        left: -17%;

        width: 0;
        height: 0;
        border-left: 120px solid transparent;
        border-right: 120px solid transparent;

        transform: rotate(-22deg);

        border-bottom: 200px solid ${({ theme }) => theme.color.green};

        ${mobile(css`
            display: none;
        `)};
    `,
};

const GreenTriangle = () => {
    const animationId = useWiggle('bio-greenTriangle', { rotation: -22 });
    return <div data-animation={animationId} css={styles.root} />;
};

export default GreenTriangle;
