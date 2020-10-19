import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { css } from 'styled-components/macro';
import { fetchLinks } from '../../repositories/link.repository';
import A from '../../components/typography/a';
import OrangeCircle from './shapes/orangeCircle';
import GreyTriangle from './shapes/greyTriangle';
import { mobile, largeMobile } from 'mediaQueries';
import GatsbyImage from 'gatsby-image';

const styles = {
    root: css`
        position: relative;
    `,
    imageContainer: css`
        background-color: ${({ theme }) => theme.color.light};
        padding: 15px;
    `,
    image: css`
        height: 500px;
        width: 500px;
        ${largeMobile(css`
            width: 100%;
            height: auto;
        `)};
        ${mobile(css`
            width: calc(100vw - 70px);
            height: calc(100vw - 70px);
        `)};
    `,
    linkContainer: css`
        position: absolute;
        transform: translateY(20px);
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
            <GreyTriangle />
            <OrangeCircle />
            <div css={styles.imageContainer}>
                <GatsbyImage fluid={fluid} css={styles.image} />
            </div>
            <div css={styles.linkContainer}>
                {Object.keys(links).map(key => (
                    <A
                        colorsToAvoid={['orange', 'blue']}
                        key={links[key]}
                        href={links[key]}
                    >
                        {key}
                    </A>
                ))}
            </div>
        </div>
    );
};

export default ImageColumn;
