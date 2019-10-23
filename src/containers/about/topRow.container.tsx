import React, { useState } from 'react';
import { H1, A, Color } from '../../components/typography';
import styled, { css, keyframes, ThemeProps } from 'styled-components';
import { Link } from 'models/link.model';
import { Wiggle } from '../../components/animations';
import { ColorBlock, ColorBlockProps } from '../../components/colorBlock';
import { Col, Row } from 'styled-bootstrap-grid';
import { deviceSize, ThemeProp } from '../../theme';
import Img, { FluidObject } from 'gatsby-image';
import { Fluid } from '../../utils/types';
import media from 'mediaQueries';

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

const BlandBlock = styled(ColorBlock)<ColorBlockProps>`
  @media ${deviceSize.xs} {
    width: 80%;
    height: 80%;
  }
  @media ${deviceSize.sm} {
    width: 80%;
    height: 80%;
  }
  @media ${deviceSize.md} {
    width: 130%;
    height: 100%;
  }
  @media ${deviceSize.lg} {
    width: 130%;
    height: 100%;
  }
  @media ${deviceSize.xl} {
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

const OrangeColorBlock = styled(ColorBlock)<ColorBlockProps>`
  @media (max-width: 575px) {
    width: 170%;
    height: 120%;
    animation: ${Wiggle(30)} 4s infinite;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    width: 170%;
    height: 120%;
    animation: ${Wiggle(30)} 4s infinite;
  }
  @media (min-width: 1101px) {
    width: 300%;
    height: 130%;
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
  right: 0;
  top: 50%;
  transform: translateX(65%) translateY(-50%) rotate(-90deg);
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
  setDescriptionHovered: (isDescriptionHovered: boolean) => void;
  fluidGif: FluidObject | null;
  emoji: string | null;
}

const TopRowContainer = (props: NameContainerProps) => {
  const { links } = props;

  return (
    <AboutTopRow>
      <NameCol hiddenMdDown md={4}>
        <BlandBlock backgroundColor="light">
          {props.emoji && <H1>{props.emoji}</H1>}
        </BlandBlock>
      </NameCol>
      <NameCol xsOffset={2} xs={9} sm={9} md={4} mdOffset={4}>
        <OrangeColorBlock backgroundColor="fun3">
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
            {props.fluidGif && (
              <GifFromHoveringDescription fluid={props.fluidGif} />
            )}
          </OrangeColorBlockRelativeReset>
        </OrangeColorBlock>
        <H1
          onMouseEnter={() => props.setDescriptionHovered(true)}
          onMouseLeave={() => props.setDescriptionHovered(false)}
          textAlign="right"
        >
          Joshua <br />
          Wootonn
        </H1>
      </NameCol>
    </AboutTopRow>
  );
};
export default TopRowContainer;
