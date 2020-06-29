import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

function getColor(props, theme) {
    switch (props) {
        case 'color-1':
            return theme.color.blue;
        case 'color-2':
            return theme.color.orange;
        case 'color-3':
            return theme.color.green;
        case 'color-4':
            return theme.color.purple;
        case 'color-5':
            return theme.color.pink;
        case 'color-6':
            return theme.color.yellow;
        default:
            return theme.color.dark;
    }
}

const StyledCursor = styled.div`
    opacity: 0.8;
    position: fixed;

    pointer-events: none;
    transform-origin: center;
    transform: translate(-50%, -50%)
        ${props => css`scale(${props.clickState ? 1.5 : 1})`};
    transition: transform 0.1s ease, background-color 0s ease, height 0.2s ease,
        border-bottom-width 0.2s ease, width 0.2s ease;

    z-index: ${props => {
        switch (props.cursorState) {
            case 'default':
                return 1;
            case 'none':
                return '';
            default:
                return 0;
        }
    }};

    ${props => {
        switch (props.cursorState) {
            case 'default':
                return css`
                    background-color: ${props.theme.color.dark};
                `;
            case 'none':
                return '';
            default:
                switch (props.cursorState.shape) {
                    case 'shape-2':
                        return css`
                            border-bottom-color: ${getColor(
                                props.cursorState.color,
                                props.theme
                            )} !important;
                        `;
                    default:
                        return css`
                            background-color: ${getColor(
                                props.cursorState.color,
                                props.theme
                            )};
                        `;
                }
        }
    }}

    ${props => {
        switch (props.cursorState) {
            case 'default':
                return css`
                    border-radius: 100%;
                    @media (max-width: 575px) {
                        width: 20px;
                        height: 20px;
                    }
                    @media (min-width: 571px) and (max-width: 1100px) {
                        width: 20px;
                        height: 20px;
                    }
                    @media (min-width: 1101px) {
                        width: 25px;
                        height: 25px;
                    }
                    @media (min-width: 1921px) {
                        width: 33px;
                        height: 33px;
                    }
                    @media (min-width: 2561px) {
                        width: 50px;
                        height: 50px;
                    }
                `;
            case 'none':
                return css`
                    width: 0px;
                    height: 0px;
                `;
            default:
                switch (props.cursorState.shape) {
                    case 'shape-1':
                        return css`
                            border-radius: 100%;
                            @media (max-width: 575px) {
                                width: 70px;
                                height: 70px;
                            }
                            @media (min-width: 571px) and (max-width: 1100px) {
                                width: 70px;
                                height: 70px;
                            }
                            @media (min-width: 1101px) {
                                width: 75px;
                                height: 75px;
                            }
                            @media (min-width: 1921px) {
                                width: 100px;
                                height: 100px;
                            }
                            @media (min-width: 2561px) {
                                width: 150px;
                                height: 150px;
                            }
                        `;
                    case 'shape-2':
                        return css`
                            border-radius: 0;
                            width: 0;
                            height: 0;
                            border-left: 50px solid transparent;
                            border-right: 50px solid transparent;
                            border-bottom: 100px solid;
                            @media (max-width: 575px) {
                                width: 70px;
                                height: 70px;
                            }
                            @media (min-width: 571px) and (max-width: 1100px) {
                                width: 70px;
                                height: 70px;
                            }
                            @media (min-width: 1101px) {
                                width: 75px;
                                height: 75px;
                            }
                        `;
                    case 'shape-3':
                        return css`
                            @media (max-width: 575px) {
                                width: 70px;
                                height: 70px;
                            }
                            @media (min-width: 571px) and (max-width: 1100px) {
                                width: 70px;
                                height: 70px;
                            }
                            @media (min-width: 1101px) {
                                width: 75px;
                                height: 75px;
                            }
                            @media (min-width: 1921px) {
                                width: 100px;
                                height: 100px;
                            }
                            @media (min-width: 2561px) {
                                width: 150px;
                                height: 150px;
                            }
                        `;
                }
        }
    }}
`;

const Cursor = () => {
    const [cursorLocation, setCursorLocation] = useState({
        top: '0',
        left: '0',
    });
    const [cursorState, setCursorState] = useState('default');
    const [clickState, setClickState] = useState(false);

    const checkHoveredNode = event => {
        const { clientX, clientY } = event;
        const target = event.target;
        /**
         * wish the following could be more optimized. I am not sure why the component would have cursorState === 'link' while
         * this function had cursorState === 'default'
         */
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
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            document.removeEventListener('mousemove', handleMouseMovement);
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
