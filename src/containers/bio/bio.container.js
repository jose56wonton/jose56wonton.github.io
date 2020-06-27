import React from 'react';
import { fetchBio } from '../../repositories/bio.repository';
import { css } from 'styled-components/macro';
import TextColumn from './textColumn';
import ImageColumn from './imageColumn';

import { mobile } from 'mediaQueries';

const styles = {
    root: css`
        position: relative;
        width: 1050px;
        max-width: 100%;
        margin: 200px auto 400px auto;
        display: flex;
        flex-direction: row;

        ${mobile(css`
            flex-direction: column;
            padding: 0 20px;

            margin: 100px auto 200px auto;
        `)};
    `,
};

const BioContainer = () => {
    const {
        primaryText: { primaryText },
        secondaryText: { secondaryText },
        profileImage: { fluid },
    } = fetchBio();

    return (
        <div css={styles.root}>
            <TextColumn
                primaryText={primaryText}
                secondaryText={secondaryText}
            />
            <ImageColumn fluid={fluid} />
        </div>
    );
};

export default BioContainer;
