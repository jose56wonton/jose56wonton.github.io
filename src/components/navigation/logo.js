import React from 'react';
import { css } from 'styled-components/macro';
import Logo from '../logo';

const styles = {
    root: css`
        width: 60px;
        height: 60px;
    `,
};

const Logo = () => <Logo css={styles.root} />;

export default Logo;
