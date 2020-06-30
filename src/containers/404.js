import React from 'react';
import { randomInclusive } from '../utils/random';
import { css } from 'styled-components/macro';
import { Link } from 'gatsby';
import { Wiggle } from '../components/animations';
import typography2 from '../components/typography/typography2';
import usePointer from '../components/usePointer';

const styles = {
    root: css`
        height: 100vh;
        width: 100vw;

        display: flex;
        justify-content: center;
        align-items: center;
    `,
    content: css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    block: css`
        background-color: ${({ theme }) => theme.color.yellow};

        height: 40vw;
        width: 60vw;
        animation: ${Wiggle(randomInclusive(-30, 30))} 4s infinite;

        @media (min-width: 1100px) {
            height: 30vw;
            width: 45vw;
        }
        margin-bottom: 200px;
    `,
    buttonContainer: css`
        padding: 20px;
    `,
    button: css`
        ${typography2.link};
        background-color: ${({ theme }) => theme.color.blue};
        color: ${({ theme }) => theme.color.light};
        transition: 200ms;
        &:active {
            transform: scale(1.2) rotate(-14deg);
        }
    `,
};

const NotFound = () => {
    const { pointerClasses } = usePointer(['blue']);
    return (
        <div css={styles.root}>
            <div css={styles.content}>
                <div css={styles.block}>
                    <h1 css={typography2.sectionTitle}>404 NOT FOUND</h1>
                </div>
                <div css={styles.buttonContainer}>
                    <Link
                        css={styles.button}
                        className={pointerClasses}
                        to={'/'}
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
