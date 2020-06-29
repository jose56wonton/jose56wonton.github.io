import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { mobile } from 'mediaQueries';

const StyledCursor = styled.div`
    ${mobile(css`
        display: none;
    `)};
    opacity: 0.8;
    position: fixed;

    pointer-events: none;
    transform-origin: center;
    transform: translate(-50%, -50%)
        scale(
            ${props => {
                if (props.cursorState === 'none') return 0;
                const clickStateDelta = props.clickState ? 1.5 : 1;
                const hoverStateDelta = props.cursorState.shape ? 3 : 1;
                return clickStateDelta * hoverStateDelta;
            }}
        );
    transition: transform 0.1s ease, background-color 0s ease;

    z-index: ${({ cursorState }) => (cursorState === 'default' ? 1 : 0)};

    background-color: ${({ theme, cursorState }) =>
        cursorState === 'default'
            ? theme.color.dark
            : theme.color[cursorState.color]};

    border-radius: ${props =>
        props.cursorState && props.cursorState.shape === 'square'
            ? '0%'
            : '100%'};

    width: 25px;
    height: 25px;
`;

const Cursor = () => {
    const [cursorLocation, setCursorLocation] = useState({
        top: '0',
        left: '0',
    });
    const [cursorState, setCursorState] = useState('default');
    const [clickState, setClickState] = useState(false);

    const checkHoveredNode = ({ clientX, clientY, target }) => {
        if (target.nodeName === 'A') {
            if (target.classList.length === 0) {
                return;
            }
            const shapeType = target.classList[target.classList.length - 2];
            const colorType = target.classList[target.classList.length - 1];
            setCursorState({
                shape: shapeType,
                color: colorType,
            });
        } else if (target.nodeName !== 'A') {
            setCursorState('default');
        }

        setCursorLocation({
            left: `${clientX}px`,
            top: `${clientY}px`,
        });
    };

    const handleMouseMovement = event => {
        checkHoveredNode(event);
    };

    const handleMouseDown = event => {
        setClickState(true);
        checkHoveredNode(event);
    };
    const handleMouseUp = event => {
        setClickState(false);
        checkHoveredNode(event);
    };

    const handleMouseEnter = event => {
        setCursorState('default');
    };
    const handleMouseLeave = event => {
        setCursorState('none');
    };

    // TODO: check when this is getting called and uncalled
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMovement);
        document.addEventListener('scroll', handleMouseMovement);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            document.removeEventListener('mousemove', handleMouseMovement);
            document.removeEventListener('scroll', handleMouseMovement);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <StyledCursor
            clickState={clickState}
            style={{ ...cursorLocation }}
            cursorState={cursorState}
        />
    );
};

export default Cursor;
