import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Flex } from 'components/flex';

import { fetchLinks } from '../../repositories/link.repository';
import { H4, A } from 'components/typography';
import { randomInclusive } from '../../utils/random';
import { Wiggle } from '../../components/animations';

const styles = {
    root: css`
        position: relative;
        width: 800px;
        margin: 0 auto 50px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
    `,
    color: {
        block: css`
            position: absolute;
            z-index: -1;
            top: 0;
            bottom: 0;
            background-color: ${({ theme }) => theme.color.yellow};
            animation: ${Wiggle(randomInclusive(-5, 5))} 4s infinite;
            right: 0;
            left: 0;
        `,
    },
};

const Wrapper = styled(Flex)`
    height: 100%;
    width: 100%;
    @media (max-width: 575px) {
        width: 80vw;
        padding: 0 10vw;
    }
`;

const ContactContainer = () => {
    const links = fetchLinks();

    return (
        <div css={styles.root}>
            <div css={styles.color.block} />
            <Wrapper justify="space-between" align="center" direction="row">
                <H4 horizontalTransform="xl">
                    Joshua Wootonn - {new Date().getFullYear()}
                </H4>
                <div>
                    {Object.keys(links).map(key => (
                        <A
                            marginRight="md"
                            horizontalTransform="xl"
                            textAlign="right"
                            key={links[key]}
                            href={links[key]}
                            data-social={key}
                        >
                            {key}
                        </A>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default ContactContainer;
