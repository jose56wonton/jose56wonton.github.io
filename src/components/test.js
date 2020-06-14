import React from 'react';
import ContactContainer from '../containers/contact';
import StylingProvider from './stylingProvider';
import { css } from 'styled-components/macro';
import Cursor from './cursor';

const styles = {
    root: css`
        height: 100vh;
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
                <ContactContainer />
            </div>
        </StylingProvider>
    );
};

export default Test;
