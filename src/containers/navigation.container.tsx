import React from 'react';
import styled from 'styled-components';
import { A } from '../components/typography';

import { scroller } from 'react-scroll';
import { fetchResume } from '../repositories/resume.repository';

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
    z-index: 100000;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const Navigation = () => {
    const locations = ['about', 'projects', 'work'];

    const resume = fetchResume();

    return (
        <Wrapper>
            <A marginRight="md" key="resume" marginLeft="md" href={resume.url}>
                resume
            </A>
            {locations.map(key => (
                <A
                    marginRight="md"
                    onClick={() =>
                        scroller.scrollTo(key, {
                            duration: 500,
                            delay: 100,
                            smooth: true,
                            offset: -150,
                        })
                    }
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
