import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { randomNumberInclusive } from '../utils/random';

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
  width: string;
  height: string;
  zIndex: number;
  backgroundColor: string;
}

const defaultCursorStyle: CursorStyle = {
  left: '0px',
  top: '0px',
  width: '20px',
  height: '20px',
  zIndex: 100,
  backgroundColor: theme.color.dark,
};

const linkCursorStyle: CursorStyle = {
  left: '0px',
  top: '0px',
  width: '70px',
  height: '70px',
  zIndex: -1,
  backgroundColor: theme.color['fun' + randomNumberInclusive(1, 6)],
};

const Cursor = () => {
  const [cursorLocation, setCursorLocation] = useState<CursorStyle>(
    defaultCursorStyle
  );

  const handleMouseMovement = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const target = event.target as HTMLElement;
    return setCursorLocation({
      ...(target.nodeName === 'A' ? linkCursorStyle : defaultCursorStyle),
      left: `${clientX}px`,
      top: `${clientY}px`,
    });
  };
  const handleMouseLeaveScreen = (event: MouseEvent) => {
    return setCursorLocation({
      ...defaultCursorStyle,
      height: `0px`,
      width: `0px`,
    });
  };
  const handleMouseEnterScreen = (event: MouseEvent) => {
    return setCursorLocation({ ...defaultCursorStyle });
  };

  // TODO: check when this is getting called and uncalled
  useEffect(() => {
    const links = document.getElementsByTagName('a');

    document.addEventListener('mousemove', handleMouseMovement);
    document.addEventListener('mouseenter', handleMouseEnterScreen);
    document.addEventListener('mouseleave', handleMouseLeaveScreen);
    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
      document.removeEventListener('mouseenter', handleMouseEnterScreen);
      document.removeEventListener('mouseleave', handleMouseLeaveScreen);
    };
  });

  return <CursorElement style={{ ...cursorLocation }} />;
};

export default Cursor;
