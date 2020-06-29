import React from 'react';
import A from '../typography/a';
import { css } from 'styled-components/macro';
import { fetchLinks } from '../../repositories/link.repository';
import CloseButton from './closeButton';
import { typography2 } from '../typography';
import Tippy from '@tippyjs/react';
import { fetchResume } from '../../repositories/resume.repository';
import animations from '../../containers/contact/animations';

const styles = {
    root: css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 15px 20px;
        pointer-events: none;

        & > div:not(:first-child) {
            opacity: 0;
            margin-top: 30px;
            transform: translateX(-50px);
        }
    `,
    openModifier: css`
        pointer-events: all;
    `,
    link: css`
        color: ${({ theme }) => theme.color.light};
    `,
    emailTooltip: css`
        ${typography2.link};
        background-color: ${({ theme }) => theme.color.green};
        color: ${({ theme }) => theme.color.dark};
        padding: 5px 5px 1px 5px;
        transform: rotate(-8deg);
        ${animations.emailTooltip};
    `,
    linkColumn: css`
        display: flex;
        justify-content: center;
        flex-direction: column;
    `,
};

export const bodyContentAnimationId = 'navigation-body-content';
export const bodyContentAnimationTarget = `[data-animation="${bodyContentAnimationId}"]`;

const Content = props => {
    const links = fetchLinks();
    const resume = fetchResume();

    return (
        <div
            css={[styles.root, props.isOpen && styles.openModifier]}
            {...props}
        >
            <CloseButton onClick={props.handleClose} />
            <div data-animation={bodyContentAnimationId}>
                <p css={typography2.text}>Find me on</p>
                <div css={styles.linkColumn}>
                    {Object.keys(links).map(key => (
                        <A css={styles.link} key={links[key]} href={links[key]}>
                            {key}
                        </A>
                    ))}
                </div>
            </div>
            <div data-animation={bodyContentAnimationId}>
                <p css={typography2.text}>Contact me at</p>
                <Tippy
                    trigger="click"
                    placement="top-end"
                    content="Copied"
                    css={styles.emailTooltip}
                >
                    {/* DISCLAIMER: not sure why I couldn't use a react*/}
                    {/*component here. It seemed that when I did the event*/}
                    {/*didn't propigate up to tippsy*/}
                    <button
                        css={[typography2.link, styles.link]}
                        className={`shape-${1} color-${3}`}
                        onClick={e => {
                            const el = document.createElement('textarea');
                            el.value = 'joshuawootonn@gmail.com';
                            document.body.appendChild(el);
                            el.select();
                            document.execCommand('copy');
                            document.body.removeChild(el);
                        }}
                    >
                        joshuawootonn@gmail.com
                    </button>
                </Tippy>
            </div>
            <div data-animation={bodyContentAnimationId}>
                <p css={typography2.text}>Learn more about me through my</p>
                <A css={styles.link} colorToAvoid={6} href={resume.url}>
                    resume
                </A>
            </div>
        </div>
    );
};

export default Content;
