import React from 'react';
import { H1, A } from '../../components/typography';
import styled from 'styled-components';
import { Link } from 'models/link.model';
import { Wiggle } from '../../components/animations';
import { ColorDiv, ColorBlockProps } from '../../components/colorDiv';
import { Col, Row } from 'styled-bootstrap-grid';
import Img, { FluidObject } from 'gatsby-image';

const AboutTopRow = styled(Row)`
  margin-top: 10vh;
  height: 40vh;
`;

const NameCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const BlandBlock = styled(ColorDiv)<ColorBlockProps>`
  @media (max-width: 575px) {
    width: 80%;
    height: 80%;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    width: 80%;
    height: 80%;
  }
  @media (min-width: 1101px) {
    width: 130%;
    height: 100%;
  }
  @media (min-width: 1921px) {
    width: 130%;
    height: 100%;
  }
  transform: rotate(100deg);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  h1 {
    margin-bottom: 0;
    transform: rotate(-90deg);
    transform-origin: center;
  }
`;

const OrangeColorBlock = styled(ColorDiv)<ColorBlockProps>`
  @media (max-width: 575px) {
    width: 110%;
    height: 90%;
    animation: ${Wiggle(30)} 4s infinite;
    transform: translateY(100px);
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    width: 170%;
    height: 120%;
    animation: ${Wiggle(40)} 4s infinite;
  }
  @media (min-width: 1101px) {
    width: 300%;
    height: 130%;
    animation: ${Wiggle(62)} 4s infinite;
  }
  @media (min-width: 1921px) {
    animation: ${Wiggle(60)} 4s infinite;
  }
`;

const OrangeColorBlockRelativeReset = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const SocialMediaLinks = styled.div`
  position: absolute;
  z-index: 200;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 575px) {
    left: 0;
    right: 0;
    bottom: 0;
    transform: rotate(0deg) translateY(55%);
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    right: 0;
    bottom: 0;
    transform: rotate(0deg) translateY(120%);
  }
  @media (min-width: 1101px) {
    right: 0;
    top: 50%;
    transform: translateX(65%) translateY(-50%) rotate(-90deg);
  }
`;

const GifFromHoveringDescription = styled(Img)`
  transform: rotate(-90deg) translateX(50%);
  @media (max-width: 575px) {
    width: 150px;
    height: 90px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    width: 150px;
    height: 90px;
  }
  @media (min-width: 1101px) {
    width: 250px;
    height: 150px;
  }
  @media (min-width: 1921px) {
    width: 300px;
    height: 180px;
  }
  @media (min-width: 2561px) {
    width: 500px;
    height: 300px;
  }
  transform-origin: center;
`;

interface NameContainerProps {
  links: Link;
  isJokeVisible: boolean;
  fluidGif: FluidObject;
  emoji: string;
}

const TopAboutRowContainer = (props: NameContainerProps) => {
  const { links } = props;

  return (
    <AboutTopRow>
      <NameCol hiddenMdDown mdOffset={1} md={4}>
        <BlandBlock backgroundColor="light">
          {props.isJokeVisible && <H1>{props.emoji}</H1>}
        </BlandBlock>
      </NameCol>
      <NameCol xsOffset={2} xs={9} sm={9} md={4} mdOffset={2}>
        <OrangeColorBlock backgroundColor="orange">
          <OrangeColorBlockRelativeReset>
            <SocialMediaLinks>
              {Object.keys(links).map(key => (
                <A
                  marginRight="md"
                  marginLeft="md"
                  key={links[key]}
                  href={links[key]}
                >
                  {key}
                </A>
              ))}
            </SocialMediaLinks>
            {props.isJokeVisible && (
              <GifFromHoveringDescription fluid={props.fluidGif} />
            )}
          </OrangeColorBlockRelativeReset>
        </OrangeColorBlock>
        <H1 textAlign="right">
          Joshua <br />
          Wootonn
        </H1>
      </NameCol>
    </AboutTopRow>
  );
};
export default TopAboutRowContainer;
