import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { deviceSize, theme, ThemeProp } from '../theme';

interface CursorProps extends ThemeProp {
  cursorType: CursorType;
}

const StyledCursor = styled.div<CursorProps>`
  border-radius: 100%;
  opacity: 0.8;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transform-origin: center;

  transition: background-color 0.2s ease, height 0.2s ease, width 0.2s ease;

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
    switch (props.cursorType) {
      case 'link':
        return `
         @media ${deviceSize.xs} {
    width: 70px;
    height: 70px;
  }
  @media ${deviceSize.sm} {
    width: 70px;
    height: 70px;
  }
  @media ${deviceSize.md} {
    width: 75px;
    height: 75px;
  }
  @media ${deviceSize.lg} {
    width: 100px;
    height: 100px;
  }
  @media ${deviceSize.xl} {
    width: 150px;
    height: 150px;
  }`;
      case 'none':
        return `
        width: 0px;
    height: 0px;
        `;
      default:
        return `
      @media ${deviceSize.xs} {
    width: 20px;
    height: 20px;
  }
  @media ${deviceSize.sm} {
    width: 20px;
    height: 20px;
  }
  @media ${deviceSize.md} {
    width: 25px;
    height: 25px;
  }
  @media ${deviceSize.lg} {
    width: 33px;
    height: 33px;
  }
  @media ${deviceSize.xl} {
    width: 50px;
    height: 50px;
  }`;
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

  const handleMouseMovement = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const target = event.target as HTMLElement;

    if (target.nodeName === 'A') {
      setCursorType('link');
    } else if (cursorType !== 'default') {
      setCursorType('default');
    }

    setCursorLocation({
      left: `${clientX}px`,
      top: `${clientY}px`,
    });
  };
  const handleMouseLeaveScreen = (event: MouseEvent) => {
    return setCursorType('none');
  };
  const handleMouseEnterScreen = (event: MouseEvent) => {
    return setCursorType('default');
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

  return <StyledCursor cursorType={cursorType} style={{ ...cursorLocation }} />;
};

export default Cursor;
