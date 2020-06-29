import React from 'react';
import { css } from 'styled-components/macro';
import useWiggle from './useWiggle';
import { mobile } from 'mediaQueries';
import BaseLogo from '../../../components/logo';

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
    `,
};

const Logo = props => {
    const animationId = useWiggle('bio-greySquare', { rotation: -19 });
    return (
        <BaseLogo css={styles.root} data-animation={animationId} {...props} />
    );
};

export default Logo;
