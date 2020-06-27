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
    title2: css`
        color: ${({ theme }) => theme.color.dark};
        font-family: 'Josefin Sans', sans-serif;
        font-size: 48px;
        font-weight: 600;
        ${mobile(css`
            font-size: 36px;
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
        line-height: 28px;
        font-weight: 500;

        position: relative;
        padding: 10px 10px 4px 10px;
    `,
};
export default typography2;
