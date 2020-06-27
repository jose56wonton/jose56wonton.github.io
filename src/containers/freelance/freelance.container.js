import React from 'react';
import { fetchFreelance } from '../../repositories/freelance.repository';
import Freelance from './freelance';
import { typography2 } from '../../components/typography';
import { css } from 'styled-components/macro';
import { mobile } from 'mediaQueries';
import { Element } from 'react-scroll';

const styles = {
    root: css`
        position: relative;
        width: 740px;
        max-width: 100%;
        margin: 0 auto;
    `,
    titleContainer: css`
        margin-bottom: 50px;
        ${mobile(css`
            padding: 0 20px;
        `)};
    `,
};

const FreelanceContainer = () => {
    const { edges } = fetchFreelance();
    return (
        <div css={styles.root}>
            <Element name="portfolio" />
            <div css={styles.titleContainer}>
                <h1 css={typography2.sectionTitle}>Portfolio</h1>
            </div>
            {edges.map((edge, i) => (
                <Freelance key={i} i={i} {...edge.node} />
            ))}
        </div>
    );
};

export default FreelanceContainer;
