import React from 'react';
import { A, typography2 } from '../../components/typography';
import { css } from 'styled-components/macro';
import Logo from './shapes/logo';
import GreenTriangle from './shapes/greenTriangle';
import ReactMarkdown from 'react-markdown';
import { mobile } from 'mediaQueries';
import { scroller } from 'react-scroll';

const styles = {
    root: css`
        width: 100%;
        margin-right: 50px;
        ${mobile(css`
            margin-right: 0;
            margin-bottom: 20px;
        `)}
    `,
    title2Modifier: css`
        ${typography2.title2};
        margin-top: 70px;

        ${mobile(css`
            margin-top: 0;
        `)};
    `,
    markDownContainer: css`
        ${typography2.text};
        margin-top: 30px;
        color: ${({ theme }) => theme.color.medium};
        ${mobile(css`
            margin-top: 20px;
        `)}
    `,
    buttonContainer: css`
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    `,
    button: css`
        ${typography2.link};
        z-index: 0;
        background-color: ${({ theme }) => theme.color.blue};
        color: ${({ theme }) => theme.color.light};
        transition: 200ms;
        &:active {
            transform: scale(1.2) rotate(14deg);
        }
    `,
};
const TextColumn = ({ primaryText, secondaryText }) => {
    return (
        <div css={styles.root}>
            <Logo />
            <GreenTriangle />
            <h1 css={styles.title2Modifier}>{primaryText}</h1>
            <ReactMarkdown
                renderers={{
                    // eslint-disable-next-line react/display-name
                    paragraph: props => (
                        <p css={styles.markDownContainer}>{props.children}</p>
                    ),
                    // eslint-disable-next-line react/display-name
                    link: props => (
                        <A
                            colorsToAvoid={['blue', 'purple', 'pink']}
                            inParagraph={true}
                            {...props}
                        />
                    ),
                }}
                source={secondaryText}
            />
            <div css={styles.buttonContainer}>
                <button
                    onClick={() =>
                        scroller.scrollTo('portfolio', {
                            duration: 500,
                            delay: 100,
                            smooth: true,
                            offset: -100,
                        })
                    }
                    css={styles.button}
                >
                    View Portfolio
                </button>
            </div>
        </div>
    );
};

export default TextColumn;
