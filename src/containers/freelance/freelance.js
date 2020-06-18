import React from 'react';
import { css } from 'styled-components/macro';
import { A, typography2 } from '../../components/typography';
import { format, parse } from 'date-fns';
import { mobile } from 'mediaQueries';
import ImageViewer from './imageViewer';
import LargeTriangle from './shapes/largeTriangle';

const styles = {
    root: css`
        position: relative;
        width: 100%;

        margin-bottom: 350px;

        ${mobile(css`
            padding: 0 20px;
            margin-bottom: 150px;
        `)};

        display: flex;
        justify-content: center;
        flex-direction: column;
    `,
    titleRow: css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        margin-bottom: 28px;
    `,
    title: css`
        ${typography2.title};
        ${mobile(css`
            font-size: 30px;
        `)}
    `,
    descriptionContainer: css`
        padding: 0 15px;
    `,
    linkRow: css`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 0 15px;
    `,
};

const Freelance = ({
    title,
    description: { description },
    images,
    start,
    repository,
    link,
    i,
}) => {
    const colorVariant = i % 2 ? 'purple' : 'pink';
    return (
        <div css={styles.root}>
            <LargeTriangle colorVariant={colorVariant} />
            <ImageViewer images={images} colorsToAvoid={[colorVariant]} />
            <div css={styles.titleRow}>
                <span css={styles.title}>{title}</span>
                <div css={typography2.text}>
                    {format(
                        parse(start, 'yyyy-MM-dd', new Date()),
                        'MMM / yyyy'
                    )}
                </div>
            </div>
            <div css={styles.descriptionContainer}>
                <p css={typography2.text}>{description}</p>
            </div>
            <div css={styles.linkRow}>
                <A href={link}>Demo</A>
                <A href={repository}>Source</A>
            </div>
        </div>
    );
};

export default Freelance;
