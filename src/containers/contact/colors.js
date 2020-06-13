import { css } from 'styled-components/macro';
import animations from './animations';
import { mobile } from 'mediaQueries';

const color = {
    block: css`
        position: absolute;
        z-index: -1;
        height: 380px;
        width: 100%;

        ${mobile(css`
            height: 550px;
        `)};

        top: 50%;

        background-color: ${({ theme }) => theme.color.yellow};

        transform-origin: center;
        ${animations.yellowBlock};
    `,
    circle: css`
        position: absolute;
        z-index: -1;
        height: 345px;
        width: 345px;
        border-radius: 172.5px;

        right: -160px;
        bottom: 0;

        background-color: ${({ theme }) => theme.color.blue};
        ${animations.blueCircle};
    `,
};

export default color;
