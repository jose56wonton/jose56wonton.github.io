import styled, { keyframes } from 'styled-components';
import { Col, Row } from 'styled-bootstrap-grid';
import { ThemeProp } from '../../theme';
import React, { useState } from 'react';
import { H3 } from '../../components/typography';
import { IsHovered } from '../../utils/types';
import { ColorBlock, ColorBlockProps } from './name.container';
import { Wiggle } from "../../components/animations"

const TitleCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type TitleBlockProps = IsHovered & ColorBlockProps;


const TitleBlock = styled(ColorBlock)<TitleBlockProps>`
  width: 100%;
  height: 100%;
  animation: ${Wiggle(-40)} 4s infinite;
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
