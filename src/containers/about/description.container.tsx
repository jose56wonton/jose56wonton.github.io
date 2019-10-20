import styled, { keyframes } from 'styled-components';
import { Col, Row } from 'styled-bootstrap-grid';
import { ThemeProp } from '../../theme';
import React, { useState } from 'react';
import { H3 } from '../../components/typography';
import { IsHovered } from '../../utils/types';
import { ColorBlock, ColorBlockProps } from './name.container';

const TitleCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type TitleBlockProps = IsHovered & ColorBlockProps;

const WiggleOut = keyframes`
  0% {    transform: rotate(-40deg);  }
  25% {    transform: rotate(-45deg);  }
  50% {    transform: rotate(-50deg);  }
  75% {    transform: rotate(-55deg);  }
  100% {    transform: rotate(-60deg);  }
`;
const WiggleIn = keyframes`
  0% {    transform: rotate(-60deg);  }
  25% {    transform: rotate(-55deg);  }
  50% {    transform: rotate(-50deg);  }
  75% {    transform: rotate(-45deg);  }
  100% {    transform: rotate(-40deg);  }
`;
const TitleBlock = styled(ColorBlock)<TitleBlockProps>`
  width: 100%;
  height: 100%;
  animation: ${(props: TitleBlockProps) =>
      !props.isHovered ? WiggleIn : WiggleOut}
    0.1s ease-in;
  transform: ${(props: TitleBlockProps) =>
    !props.isHovered ? `rotate(-40deg)` : `rotate(-60deg)`};
`;

const DescriptionRow = styled(Row)`
  margin-bottom: 10vh;
  height: 40vh;
`;

const DescriptionContainer = (props: { description: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <DescriptionRow>
      <TitleCol lg={6}>
        <TitleBlock backgroundColor="fun2" isHovered={isHovered} />
        <H3
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {props.description}
        </H3>
      </TitleCol>
    </DescriptionRow>
  );
};
export default DescriptionContainer;
