import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';

const VerticalScrollbar = styled.div`
    background-color: ${props => props.theme.color.pink};
`;
const HorizontalScrollbar = styled.div`
    background-color: ${props => props.theme.color.green};
`;

const Scrollbar: React.FC = props => (
    <Scrollbars
        renderThumbHorizontal={props => (
            <HorizontalScrollbar {...props} className="thumb-horizontal" />
        )}
        renderThumbVertical={props => (
            <VerticalScrollbar {...props} className="thumb-vertical" />
        )}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        thumbMinSize={30}
        universal={true}
        {...props}
    />
);
export default Scrollbar;

// TODO: this conflicted with react-scroll so I took it out. looking into soon!
