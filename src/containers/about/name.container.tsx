import React, { useState } from 'react';
import { H1, A, Color } from '../../components/typography';
import styled, { keyframes } from 'styled-components';
import { Col, Row } from 'styled-bootstrap-grid';
import { ThemeProp } from '../../theme';
import { IsHovered } from '../../utils/types';
import { Link } from 'models/link.model';

const NameRow = styled(Row)`
  margin-top: 10vh;
  height: 40vh;
`;

const NameCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WiggleOut = keyframes`
  0% {    transform: rotate(40deg);  }
  25% {    transform: rotate(45deg);  }
  50% {    transform: rotate(50deg);  }
  75% {    transform: rotate(55deg);  }
  100% {    transform: rotate(60deg);  }
`;
const WiggleIn = keyframes`
  0% {    transform: rotate(60deg);  }
  25% {    transform: rotate(55deg);  }
  50% {    transform: rotate(50deg);  }
  75% {    transform: rotate(45deg);  }
  100% {    transform: rotate(40deg);  }
`;

export interface ColorBlockProps {
  backgroundColor: Color;
}

type NameBlockProps = ColorBlockProps & IsHovered;

export const ColorBlock = styled.div<ColorBlockProps>`
  background-color: ${(props: ThemeProp & ColorBlockProps) =>
    props.theme.color[props.backgroundColor]};
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Wiggle = keyframes`
  0% { transform: rotate(0)}
  50% { transform: rotate(1deg)}
  100% { transform: rotate(0)}
`;

const BlandBlock = styled(ColorBlock)<ColorBlockProps>`
  width: 80%;
  height: 80%;
  transform: rotate(100deg);
  animation: ${Wiggle} 2s infinite;
`;

const NameBlock = styled(ColorBlock)<NameBlockProps>`
  width: 150%;
  height: 150%;
  animation: ${(props: ThemeProp & NameBlockProps) =>
        props.isHovered ? WiggleOut : WiggleIn}
      0.1s ease-in,
    ${Wiggle} 2s infinite;
  transform: ${(props: ThemeProp & NameBlockProps) =>
    props.isHovered ? `rotate(60deg)` : `rotate(40deg)`};
`;

const AAA = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Social = styled.div`
  position: absolute;
  z-index: 200;
  right: 0;
  top: 50%;
  transform: translateX(65%) translateY(-50%) rotate(-90deg);
`;

interface NameContainerProps {
  links: Link;
}

const NameContainer = (props: NameContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { links } = props;

  return (
    <NameRow>
      <NameCol lg={6}>
        <BlandBlock backgroundColor="light" />
      </NameCol>
      <NameCol lg={6}>
        <NameBlock backgroundColor="fun1" isHovered={isHovered}>
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
          </AAA>
        </NameBlock>

        <H1
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
