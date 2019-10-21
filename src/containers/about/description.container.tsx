import styled from 'styled-components';
import { Col, Row } from 'styled-bootstrap-grid';
import React, { useState } from 'react';
import { H3 } from '../../components/typography';
import { IsHovered } from '../../utils/types';
import { Wiggle } from '../../components/animations';
import { Link } from '../../models/link.model';
import { ColorBlock, ColorBlockProps } from '../../components/colorBlock';

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

const BlandBlock = styled(ColorBlock)<ColorBlockProps>`
  width: 65%;
  height: 65%;
  transform: rotate(10deg) translateY(100px);
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionRow = styled(Row)`
  margin-bottom: 10vh;
  height: 40vh;
`;
interface DescriptionContainerProps {
  isDescriptionHovered: number;
  setDescriptionHovered: (isDescriptionHovered: boolean) => void;
  title: string;
}

const DescriptionContainer = (props: DescriptionContainerProps) => {
  return (
    <DescriptionRow>
      <TitleCol lg={6}>
        <TitleBlock
          backgroundColor="fun2"
          isHovered={Boolean(props.isDescriptionHovered)}
        />
        <H3
          onMouseEnter={() => props.setDescriptionHovered(true)}
          onMouseLeave={() => props.setDescriptionHovered(false)}
        >
          {props.title}
        </H3>
      </TitleCol>
      <TitleCol lg={6}>
        <BlandBlock backgroundColor="light" />
      </TitleCol>
    </DescriptionRow>
  );
};
export default DescriptionContainer;
