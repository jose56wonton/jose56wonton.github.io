import React, { useRef, useState } from 'react';
import { css } from 'styled-components/macro';
import { desktop } from 'mediaQueries';
import OpenButton, { openButtonAnimationId } from './openButton';
import Content from './content';
import { closeThatLad, openThatLad } from './animations';
import Logo from '../logo';

const styles = {
    root: css`
        position: fixed;
        top: 0;
        transform: translateY(0);
        z-index: 100;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        padding: 20px 20px 10px 20px;

        ${desktop(css`
            display: none;
        `)};

        background-color: ${({ theme }) => theme.color.white};
    `,
    logo: css`
        width: 60px;
        height: 60px;
    `,
};

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const transitionLock = useRef(false);

    const toggleNavigationOpen = async () => {
        if (transitionLock.current) return;
        transitionLock.current = true;

        if (!isOpen) {
            await openThatLad();
            setIsOpen(true);
        } else {
            setIsOpen(false);
            await closeThatLad();
        }

        transitionLock.current = false;
    };

    return (
        <div css={styles.root}>
            <Logo css={styles.logo} />
            <OpenButton
                data-animation={openButtonAnimationId}
                onClick={toggleNavigationOpen}
            />
            <Content handleClose={toggleNavigationOpen} isOpen={isOpen} />
        </div>
    );
};

export default Navigation;
