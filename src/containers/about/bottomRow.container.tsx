import styled from 'styled-components';
import { Col, Row } from 'styled-bootstrap-grid';
import React, { useState } from 'react';
import { H3 } from '../../components/typography';
import { IsHovered } from '../../utils/types';
import { Wiggle } from '../../components/animations';
import { Link } from '../../models/link.model';
import { ColorBlock, ColorBlockProps } from '../../components/colorBlock';
import { deviceSize } from '../../theme';

const TitleCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type TitleBlockProps = IsHovered & ColorBlockProps;

const TitleBlock = styled(ColorBlock)<TitleBlockProps>`
  @media ${deviceSize.xs} {
    width: 100%;
    height: 100%;
  }
  @media ${deviceSize.sm} {
    width: 100%;
    height: 100%;
  }
  @media ${deviceSize.md} {
    width: 150%;
    height: 120%;
  }
  @media ${deviceSize.lg} {
    width: 150%;
    height: 120%;
  }
  @media ${deviceSize.xl} {
    width: 150%;
    height: 120%;
  }
  animation: ${Wiggle(-40)} 4s infinite;
`;

const BlandBlock = styled(ColorBlock)<ColorBlockProps>`
  @media ${deviceSize.xs} {
    width: 65%;
    height: 65%;
  }
  @media ${deviceSize.sm} {
    width: 65%;
    height: 65%;
  }
  @media ${deviceSize.md} {
    width: 95%;
    height: 65%;
  }
  @media ${deviceSize.lg} {
    width: 95%;
    height: 65%;
  }
  @media ${deviceSize.xl} {
    width: 95%;
    height: 65%;
  }
  transform: rotate(10deg) translateY(100px);
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutBottomRow = styled(Row)`
  margin-bottom: 10vh;
  height: 40vh;
`;
interface DescriptionContainerProps {
  isDescriptionHovered: number;
  setDescriptionHovered: (isDescriptionHovered: boolean) => void;
  title: string;
}

const BottomRowContainer = (props: DescriptionContainerProps) => {
  return (
    <AboutBottomRow>
      <TitleCol xs={6} sm={6} md={4} >
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
      <TitleCol xs={6} sm={6} md={4} mdOffset={4}>
        <BlandBlock backgroundColor="light" />
      </TitleCol>
    </AboutBottomRow>
  );
};
export default BottomRowContainer;
