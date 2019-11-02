import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { deviceSize, theme, ThemeProp } from '../theme';
import { debounce } from 'lodash'; // TODO: maybe remove lodash if this is the only usage

interface CursorProps extends ThemeProp {
  cursorType: CursorType;
  clickState: boolean;
}

// transform: ${props => {
//     console.log(props.clickState);
//     const aaaa = props.clickState
//       ? 'translate(-50%, -50%) scale(1.25)'
//       : 'translate(-50%, -50%)';
//     console.log(aaaa);
//     return aaaa;
//   }}
const StyledCursor = styled.div<CursorProps>`
  border-radius: 100%;
  opacity: 0.8;
  position: fixed;

  transform: translate(-50%, -50%)
    scale(${props => (props.clickState ? 1.5 : 1)});

  pointer-events: none;
  transform-origin: center;

  transition: transform 0.1s ease, background-color 0.2s ease, height 0.2s ease,
    width 0.2s ease;

  z-index: ${(props: CursorProps) => {
    switch (props.cursorType) {
      case 'link':
        return -1;
      case 'none':
        return '';
      default:
        return 1;
    }
  }};
  background-color: ${(props: CursorProps) => {
    switch (props.cursorType) {
      case 'link':
        return props.theme.color.blue;
      case 'none':
        return '';
      default:
        return props.theme.color.dark;
    }
  }};

  ${(props: CursorProps) => {
    // console.log('styled', props.cursorType);
    switch (props.cursorType) {
      case 'link':
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
      case 'none':
        return `
        width: 0px;
    height: 0px;
        `;
      default:
        return css`
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
    }
  }};
`;

interface CursorLocation {
  top: string;
  left: string;
}

type CursorType = 'link' | 'default' | 'none';

const Cursor = () => {
  const [cursorLocation, setCursorLocation] = useState<CursorLocation>({
    top: '0',
    left: '0',
  });
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [clickState, setClickState] = useState(false);

  const handleMouseMovement = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const target = event.target as HTMLElement;

    /**
     * wish the following could be more optimized. I am not sure why the component would have cursorType === 'link' while
     * this function had cursorType === 'default'
     */
    if (target.nodeName === 'A' && cursorType === 'default') {
      setCursorType('link');
    } else if (target.nodeName !== 'A') {
      setCursorType('default');
    }

    setCursorLocation({
      left: `${clientX}px`,
      top: `${clientY}px`,
    });
  };

  const handleMouseDown = (event: MouseEvent) => {
    setClickState(true);
  };
  const handleMouseUp = (event: MouseEvent) => {
    setClickState(false);
  };

  const handleMouseEnter = (event: MouseEvent) => {
    setCursorType('default');
  };
  const handleMouseLeave = (event: MouseEvent) => {
    setCursorType('none');
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
      cursorType={cursorType}
      style={{ ...cursorLocation }}
    />
  );
};

export default Cursor;
