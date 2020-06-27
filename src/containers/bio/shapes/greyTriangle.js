import React from 'react';
import { css } from 'styled-components/macro';
import useWiggle from './useWiggle';
import { mobile } from 'mediaQueries';

const styles = {
    root: css`
        position: absolute;
        z-index: -1;
        top: -35%;
        right: -35%;

        width: 0;
        height: 0;
        border-left: 180px solid transparent;
        border-right: 180px solid transparent;

        transform: rotate(40deg);

        border-bottom: 300px solid ${({ theme }) => theme.color.light};

        ${mobile(css`
            top: -35%;
            left: -35%;
            border-bottom: 300px solid ${({ theme }) => theme.color.light};
        `)};
    `,
};

const GreyTriangle = () => {
    const animationId = useWiggle('bio-greyTriangle', { rotation: 40 });

    return <div data-animation={animationId} css={styles.root} />;
};

export default GreyTriangle;
