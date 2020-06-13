import { css } from 'styled-components/macro';

export const deviceSize = {
    xs: `(max-width: 575px)`,
    sm: `(min-width: 571px) and (max-width: 1100px)`,
    md: `(min-width: 1101px)`,
    lg: `(min-width: 1921px)`,
    xl: `(min-width: 2561px)`,
};

export default Object.keys(deviceSize).reduce((acc, label) => {
    acc[label] = cssToBeInQuery => {
        console.log(cssToBeInQuery);
        css`
            @media ${deviceSize[label]} {
                ${cssToBeInQuery};
            }
        `;
    };
    return acc;
}, {});

export const breaks = {
    large: 1000,
};

export const mobile = aaa =>
    css`
        @media (min-width: 0px) and (max-width: 800px) {
            ${aaa};
        }
    `;
export const desktop = aaa =>
    css`
        @media (min-width: 800px) {
            ${aaa};
        }
    `;
