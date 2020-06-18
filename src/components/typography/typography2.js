import { css } from 'styled-components/macro';
import { mobile } from '../../mediaQueries';

export const typography2 = {
    sectionTitle: css`
        color: ${({ theme }) => theme.color.dark};
        font-family: 'Josefin Sans', sans-serif;
        font-size: 118px;
        font-weight: 600;
        ${mobile(css`
            font-size: 80px;
        `)}
    `,
    title: css`
        color: ${({ theme }) => theme.color.dark};
        font-family: 'Josefin Sans', sans-serif;
        font-size: 65px;
        font-weight: 600;
        ${mobile(css`
            font-size: 45px;
        `)}
    `,
    text: css`
        color: ${({ theme }) => theme.color.dark};
        font-family: 'Josefin Sans', sans-serif;
        font-size: 21px;
    `,
    link: css`
        z-index: 5;
        color: ${({ theme }) => theme.color.dark};
        font-family: 'Josefin Sans', sans-serif;
        font-size: 28px;
        font-weight: 500;

        position: relative;
        padding: 10px;
    `,
};
export default typography2;
