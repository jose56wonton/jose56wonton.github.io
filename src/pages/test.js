import React from 'react';
import ContactContainer from '../containers/contact';
import StylingProvider from '../components/stylingProvider';
import { css } from 'styled-components/macro';
import Cursor from '../components/cursor';

const styles = {
    root: css`
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
};

const Test = props => {
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
