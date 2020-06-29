import React from 'react';

import { css } from 'styled-components/macro';

const styles = {
    root: css`
        position: relative;

        transform-origin: center;
        transform: rotate(-22deg);

        height: 50px;
        width: 50px;
        background-color: ${({ theme }) => theme.color.purple};
    `,
};

export const openButtonAnimationId = 'navigation-open-button';
export const openButtonAnimationTarget = `[data-animation="${openButtonAnimationId}"]`;

const OpenButton = props => (
    <button
        css={styles.root}
        data-animation={openButtonAnimationId}
        {...props}
    />
);

export default OpenButton;
