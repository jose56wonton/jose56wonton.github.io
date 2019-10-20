import React, { useState } from 'react';
import { H1, A, Color } from '../../components/typography';
import styled, { keyframes } from 'styled-components';
import { Col, Row } from 'styled-bootstrap-grid';
import { ThemeProp } from '../../theme';
import { IsHovered } from '../../utils/types';
import { Link } from 'models/link.model';
import { Wiggle } from '../../components/animations';

const NameRow = styled(Row)`
  margin-top: 10vh;
  height: 40vh;
`;

const NameCol = styled(Col)`
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface ColorBlockProps {
  backgroundColor: Color;
}

type NameBlockProps = ColorBlockProps;

export const ColorBlock = styled.div<ColorBlockProps>`
  background-color: ${(props: ThemeProp & ColorBlockProps) =>
    props.theme.color[props.backgroundColor]};
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BlandBlock = styled(ColorBlock)<ColorBlockProps>`
  width: 80%;
  height: 80%;
  transform: rotate(100deg);
  z-index: -1;
`;

const NameBlock = styled(ColorBlock)<NameBlockProps>`
  width: 150%;
  height: 150%;
  animation: ${Wiggle(60)} 4s infinite;
`;

const AAA = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Social = styled.div`
  position: absolute;
  z-index: 200;
  right: 0;
  top: 50%;
  transform: translateX(65%) translateY(-50%) rotate(-90deg);
`;

interface GifProps {
  isVisible: boolean;
}

const Gif = styled.img<GifProps>`
  display: ${(props: GifProps) => (props.isVisible ? 'inherit' : 'none')};
  z-index: 50;
  transform: rotate(-90deg) translateX(150px);
`;

interface NameContainerProps {
  links: Link;
  isDescriptionHovered: number;
  setDescriptionHovered: (isDescriptionHovered: boolean) => void;
  gifSrc: string;
}

const NameContainer = (props: NameContainerProps) => {
  const { links } = props;

  return (
    <NameRow>
      <NameCol lg={6}>
        <BlandBlock backgroundColor="light" />
      </NameCol>
      <NameCol lg={6}>
        <NameBlock backgroundColor="fun3">
          <AAA>
            <Social>
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
            </Social>

            <Gif
              isVisible={Boolean(props.isDescriptionHovered)}
              src={props.gifSrc}
            />
          </AAA>
        </NameBlock>
        <H1
          onMouseEnter={() => props.setDescriptionHovered(true)}
          onMouseLeave={() => props.setDescriptionHovered(false)}
          textAlign="right"
        >
          Joshua <br />
          Wootonn
        </H1>
      </NameCol>
    </NameRow>
  );
};
export default NameContainer;
