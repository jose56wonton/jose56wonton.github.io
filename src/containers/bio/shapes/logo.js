import React from 'react';
import { css } from 'styled-components/macro';
import useWiggle from './useWiggle';
import { largeMobile } from 'mediaQueries';
import BaseLogo from '../../../components/logo';

const styles = {
    root: css`
        position: absolute;
        z-index: -1;
        bottom: -40%;
        left: -10%;

        width: 300px;
        height: 300px;

        ${largeMobile(css`
            display: none;
        `)};
    `,
};

const Logo = props => {
    const animationId = useWiggle('bio-greySquare', { rotation: -19 });
    return (
        <BaseLogo css={styles.root} data-animation={animationId} {...props} />
    );
};

export default Logo;
