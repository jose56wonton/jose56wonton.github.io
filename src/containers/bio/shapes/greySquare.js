import React from 'react';
import { css } from 'styled-components/macro';
import useWiggle from './useWiggle';
import { mobile } from 'mediaQueries';

const styles = {
    root: css`
        position: absolute;
        z-index: -1;
        bottom: -40%;
        left: 3%;

        width: 270px;
        height: 270px;
        background-color: ${({ theme }) => theme.color.light};
        transform: rotate(19deg);

        ${mobile(css`
            display: none;
        `)};
    `,
};

const GreySquare = () => {
    const animationId = useWiggle('bio-greySquare', { rotation: 19 });
    return <div data-animation={animationId} css={styles.root} />;
};

export default GreySquare;
