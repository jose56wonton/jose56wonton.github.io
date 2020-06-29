import React from 'react';
import { css } from 'styled-components/macro';

const styles = {
    root: css`
        transform-origin: center;
        transform: rotate(-22deg) scale(0);
        z-index: 101;

        position: fixed;
        right: 20px;
        top: 25px;

        height: 50px;
        width: 50px;
        background-color: ${({ theme }) => theme.color.light};
    `,
};

export const closeButtonAnimationId = 'navigation-close-button';
export const closeButtonAnimationTarget = `[data-animation="${closeButtonAnimationId}"]`;

const CloseButton = props => (
    <button
        css={styles.root}
        data-animation={closeButtonAnimationId}
        {...props}
    />
);

export default CloseButton;
