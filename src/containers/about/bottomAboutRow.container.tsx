import styled from 'styled-components';
import { Col, Row } from 'styled-bootstrap-grid';
import React from 'react';
import { H3 } from '../../components/typography';
import { IsHovered } from '../../utils/types';
import { Wiggle } from '../../components/animations';
import { ColorDiv, ColorBlockProps } from '../../components/colorDiv';

const TitleCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type TitleBlockProps = IsHovered & ColorBlockProps;

const TitleBlock = styled(ColorDiv)<TitleBlockProps>`
  @media (max-width: 575px) {
    width: 170%;
    height: 100%;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    width: 170%;
    height: 80%;
  }
  @media (min-width: 1101px) {
    width: 150%;
    height: 120%;
  }
  animation: ${Wiggle(-40)} 4s infinite;
`;

const BlandBlock = styled(ColorDiv)<ColorBlockProps>`
  @media (max-width: 575px) {
    width: 65%;
    height: 65%;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    width: 65%;
    height: 65%;
  }
  @media (min-width: 1101px) {
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
  isJokeVisible: boolean;
  setJokeVisible: (isDescriptionHovered: boolean) => void;
  jokeTitle: string;
}

const BottomAboutRowContainer = (props: DescriptionContainerProps) => {
  return (
    <AboutBottomRow>
      <TitleCol xsOffset={2} xs={7} sm={7} md={4}>
        <TitleBlock backgroundColor="green" isHovered={props.isJokeVisible} />
        <H3
          onMouseEnter={() => props.setJokeVisible(true)}
          onMouseLeave={() => props.setJokeVisible(false)}
        >
          {props.isJokeVisible ? props.jokeTitle : 'Software Engineer'}
        </H3>
      </TitleCol>
      <TitleCol hiddenMdDown md={4} mdOffset={4}>
        <BlandBlock backgroundColor="light" />
      </TitleCol>
    </AboutBottomRow>
  );
};
export default BottomAboutRowContainer;
