import React from 'react';
import { css } from 'styled-components/macro';
import { A, typography2 } from '../../components/typography';
import { mobile } from '../../mediaQueries';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import { fetchResume } from '../../repositories/resume.repository';
import { fetchLinks } from '../../repositories/link.repository';
import animations from './animations';
import color from './colors';

const styles = {
    root: css`
        position: relative;
        width: 740px;
        max-width: 100%;

        height: 500px;
        margin: 0 auto 50px auto;

        ${mobile(css`
            height: 650px;
            padding: 0 20px;
            margin-bottom: 30px;
        `)};

        display: flex;
        justify-content: center;
        flex-direction: column;
    `,
    content: css`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;

        & > div {
            margin-top: 25px;
            margin-left: 40px;

            ${mobile(css`
                margin-left: 0;
            `)};
        }
    `,

    contactContainer: css`
        display: flex;
        flex-direction: column;
        span {
            padding-bottom: 10px;
        }
    `,
    email: css`
        ${typography2.link};
    `,
    emailTooltip: css`
        ${typography2.link};
        background-color: ${({ theme }) => theme.color.pink};
        color: ${({ theme }) => theme.color.white};
        padding: 5px 5px 1px 5px;
        transform: rotate(-8deg);
        ${animations.emailTooltip};
    `,
    resume: css`
        ${typography2.link};
        color: ${({ theme }) => theme.color.dark};
    `,
    linkContainer: css`
        display: inline-block;

        & > a:not(:last-child) {
            margin-right: 16px;
        }

        ${mobile(css`
            display: block;
        `)};
    `,
};

const ContactContainer = () => {
    const links = fetchLinks();
    const resume = fetchResume();

    return (
        <div css={styles.root}>
            <div css={color.block} />
            <div css={color.circle} />
            <div css={styles.content}>
                <h1 css={typography2.title}>Interested in working together?</h1>

                <div css={styles.contactContainer}>
                    <div>
                        <span css={typography2.text}>Contact me at</span>
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
                                css={styles.email}
                                className={`shape-${1} color-${3}`}
                                onClick={e => {
                                    const el = document.createElement(
                                        'textarea'
                                    );
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
                    <div>
                        <span css={typography2.text}>
                            Learn more about me through my
                        </span>
                        <A colorsToAvoid={['yellow']} href={resume.url}>
                            resume
                        </A>
                    </div>
                </div>
                <div css={styles.linkContainer}>
                    {Object.keys(links).map(key => (
                        <A
                            colorsToAvoid={['yellow']}
                            css={styles.link}
                            key={links[key]}
                            href={links[key]}
                        >
                            {key}
                        </A>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;
