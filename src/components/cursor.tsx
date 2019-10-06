import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme, Theme } from '../theme';

const BigLad = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  opacity: 0.8;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1000;
  transition: width 0.3s, height 0.3s, opacity 0.3s, background-color 0.3s;
`;

interface CursorStyle {
  left: string;
  top: string;
  backgroundColor: string;
  width: string;
  height: string;
}

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>({
    left: '0px',
    top: '0px',
    backgroundColor: ' ',
    width: '20px',
    height: '20px',
  });

  const handleMouseMovement = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    let backgroundColor = theme.color.dark;
    let width = '20px';
    let height = '20px';
    if (target.nodeName === 'A') {
      backgroundColor = theme.color.accent;
      width = '40px';
      height = '40px';
    }

    return setCursorStyle({
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
      backgroundColor,
      width,
      height,
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMovement);
    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
    };
  });

  return (
    <>
      <BigLad style={{ ...cursorStyle }} />
    </>
  );
};

export default Cursor;
