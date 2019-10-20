import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const CursorElement = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  opacity: 0.8;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 100;
  transition: width 0.15s, height 0.15s, background-color 0.15s;
`;

interface CursorStyle {
  left: string;
  top: string;
  backgroundColor: string;
  width: string;
  height: string;
  zIndex: string;
}

const defaultCursorStyle: CursorStyle = {
  left: '0px',
  top: '0px',
  backgroundColor: theme.color.dark,
  width: '20px',
  height: '20px',
  zIndex: '100',
};
const linkCursorStyle: CursorStyle = {
  left: '0px',
  top: '0px',
  backgroundColor: theme.color.fun1,
  width: '70px',
  height: '70px',
  zIndex: '-1',
};

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>(
    defaultCursorStyle
  );

  const handleMouseMovement = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const target = event.target as HTMLElement;
    return setCursorStyle({
      ...(target.nodeName === 'A' ? linkCursorStyle : defaultCursorStyle),
      left: `${clientX}px`,
      top: `${clientY}px`,
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMovement);
    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
    };
  });

  return <CursorElement style={{ ...cursorStyle }} />;
};

export default Cursor;
