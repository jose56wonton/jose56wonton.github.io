import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const BigLad = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: black;
  opacity: 0.3;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width 0.3s, height 0.3s, opacity 0.3s;
`;

interface CursorStyle {
  left: string;
  top: string;
}
const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>({
    left: '0px',
    top: '0px',
  });

  const handleMouseMovement = (event: MouseEvent) =>
    setCursorStyle({
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
    });

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
