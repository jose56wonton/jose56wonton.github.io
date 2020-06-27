import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { css } from 'styled-components/macro';
import { fetchLinks } from '../../repositories/link.repository';
import A from '../../components/typography/a';
import OrangeCircle from './shapes/orangeCircle';
import GreenTriangle from './shapes/greenTriangle';
import { mobile } from 'mediaQueries';

const styles = {
    root: css`
        background-color: ${({ theme }) => theme.color.light};
        padding: 15px;
        position: relative;
    `,
    image: css`
        height: 500px;
        width: 500px;
        ${mobile(css`
            width: calc(100vw - 70px);
            height: calc(100vw - 70px);
        `)};
    `,
    linkContainer: css`
        position: absolute;
        transform: translateY(20px) translateX(-15px);
        width: 100%;

        z-index: 1;

        display: flex;
        flex-direction: row;
        justify-content: space-around;

        ${mobile(css`
            display: none;
        `)};
    `,
};

const ImageColumn = ({ fluid }) => {
    const links = fetchLinks();
    return (
        <div css={styles.root}>
            <GreenTriangle />
            <OrangeCircle />

            <BackgroundImage fluid={fluid} css={styles.image} />
            <div css={styles.linkContainer}>
                {Object.keys(links).map(key => (
                    <A key={links[key]} href={links[key]}>
                        {key}
                    </A>
                ))}
            </div>
        </div>
    );
};

export default ImageColumn;
