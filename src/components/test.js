import React from 'react';
import ContactContainer from '../containers/contact';
import StylingProvider from './stylingProvider';
import { css } from 'styled-components/macro';
import Cursor from './cursor';
import FreelanceContainer from '../containers/freelance';

const styles = {
    root: css`
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
};

const Test = () => {
    return (
        <StylingProvider>
            <Cursor />
            <div css={styles.root}>
                <FreelanceContainer />
            </div>
        </StylingProvider>
    );
};

export default Test;
