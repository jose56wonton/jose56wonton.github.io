import React from 'react';
import styled from 'styled-components';
import { A } from '../components/typography';
import { randomNumberInclusive } from '../utils/random';

const Wrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 50vh;
  transform: translate(75px, 50vh) rotate(-90deg);
  transform-origin: left;
  width: 100vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const Navigation = () => {
  const aaa = ['about', 'projects', 'work'];
  return (
    <Wrapper>
      {aaa.map(key => (
        <A
          marginRight="md"
          className={`shape-${randomNumberInclusive(
            1,
            3
          )} color-${randomNumberInclusive(1, 6)}`}
          marginLeft="md"
          key={key}
        >
          {key}
        </A>
      ))}
    </Wrapper>
  );
};

export default Navigation;
