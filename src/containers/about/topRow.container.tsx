import React, { useState } from 'react';
import { H1, A, Color } from '../../components/typography';
import styled, { keyframes } from 'styled-components';
import { Link } from 'models/link.model';
import { Wiggle } from '../../components/animations';
import { ColorBlock, ColorBlockProps } from '../../components/colorBlock';

import { Grid, Cell } from 'styled-css-grid';

const AboutTopRow = styled(Grid)`
  margin-top: 10vh;
  height: 40vh;
`;

const NameCol = styled(Cell)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const BlandBlock = styled(ColorBlock)<ColorBlockProps>`
  width: 80%;
  height: 80%;
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
  width: 150%;
  height: 150%;
  animation: ${Wiggle(60)} 4s infinite;
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

interface GifProps {
  isVisible: boolean;
}

const GifFromHoveringDescription = styled.img<GifProps>`
  display: ${(props: GifProps) => (props.isVisible ? 'inherit' : 'none')};
  transform: rotate(-90deg) translateX(50%);
  max-height: 200px;
  transform-origin: center;
`;

interface NameContainerProps {
  links: Link;
  isDescriptionHovered: number;
  setDescriptionHovered: (isDescriptionHovered: boolean) => void;
  gifSrc: string;
  emoji: string;
}

const TopRowContainer = (props: NameContainerProps) => {
  const { links } = props;

  return (
    <AboutTopRow >
      <NameCol width={6}>
        <BlandBlock backgroundColor="light">
          <H1>{props.emoji}</H1>
        </BlandBlock>
      </NameCol>
      <NameCol width={6}>
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
            <GifFromHoveringDescription
              isVisible={Boolean(props.isDescriptionHovered)}
              src={props.gifSrc}
            />
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
