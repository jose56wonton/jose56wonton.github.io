import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    width: ${props => (props.isFullWidth ? '100%' : 'auto')};
    flex-direction: ${props => props.direction};
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    flex-wrap: ${props => props.wrap};
`;
