import React from 'react';
import { css } from 'styled-components/macro';
import useWiggle from './useWiggle';

const styles = {
    root: css`
        position: absolute;
        z-index: -1;
        bottom: -40%;
        right: -30%;

        width: 337px;
        height: 337px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.orange};
    `,
};

const OrangeCircle = () => {
    const animationId = useWiggle('bio-orangeCircle', { rotation: 0 });

    return <div data-animation={animationId} css={styles.root} />;
};

export default OrangeCircle;
