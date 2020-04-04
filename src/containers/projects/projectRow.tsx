import Img from 'gatsby-image';
import { A, H3, H4, MarkdownP, P } from '../../components/typography';
import ReactMarkdown from 'react-markdown';
import { Flex } from '../../components/flex';
import React from 'react';
import { Work } from '../../models/work.model';
import styled from 'styled-components';
import { ThemeProp } from '../../theme';
import { ColorDiv } from '../../components/colorDiv';
import { Wiggle } from '../../components/animations';
import { randomInclusive } from '../../utils/random';
import { formatDate } from '../../components/datetime';
import { Row, Col } from '../../components/layout';

interface ColorBlockProps {
    angle: number;
    animationTime: number;
}

const ColorBlock = styled(ColorDiv)<ColorBlockProps>`
    @media (max-width: 1100px) {
        animation: ${(props: ColorBlockProps) =>
                Wiggle(Math.floor(props.angle / 2))}
            ${props => props.animationTime}s infinite;
    }
    @media (min-width: 1101px) {
        animation: ${(props: ColorBlockProps) => Wiggle(props.angle)}
            ${props => props.animationTime}s infinite;
    }
`;

const ImageBlock = styled.div`
    background-color: ${(props: ThemeProp) => props.theme.color.light};
    padding: ${(props: ThemeProp) => props.theme.elementSizes.sm}px;
`;

const LinkBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    * {
        margin-right: 16px;
    }
    *:last-child {
        margin-right: 0;
    }
`;

const ImageCol = styled(Col)`
    @media (max-width: 1100px) {
        margin: 0px 20px 30px 20px;
    }
    @media (min-width: 1101px) {
        width: 60%;
        transform: translateX(
            -${(props: ThemeProp) => 2 * props.theme.elementSizes.lg}px
        );
    }
`;

interface Props {
    work: Work;
}

const ProjectRow = ({ work }: Props) => {
    return (
        <Row justify="space-between" align="center" key={work.id}>
            <ImageCol xs={12} md={7}>
                <ImageBlock>
                    <Img fadeIn fluid={work.images[0].fluid} />
                </ImageBlock>

                <LinkBlock>
                    {work.repository && (
                        <A
                            data-project={`${work.title} - Repo`}
                            href={work.repository}
                        >
                            Repo
                        </A>
                    )}
                    {work.link && (
                        <A
                            data-project={`${work.title} - Repo`}
                            href={work.link}
                        >
                            Live
                        </A>
                    )}
                </LinkBlock>
            </ImageCol>

            <Col xs={12} md={5}>
                <ColorBlock
                    angle={randomInclusive(-10, 10)}
                    animationTime={randomInclusive(2, 4)}
                    backgroundColor="pink"
                />
                <H3 marginBottom="sm" textAlign="right">
                    {work.title}
                </H3>
                <Flex
                    wrap="wrap"
                    direction="row"
                    justify="space-between"
                    align="center"
                >
                    <H4 marginBottom="sm">When: </H4>
                    <P textAlign="right" marginLeft="sm" color="medium">
                        {`${formatDate(work.start)} - ${formatDate(work.end)}`}
                    </P>
                </Flex>
                <Flex
                    wrap="wrap"
                    direction="row"
                    justify="space-between"
                    align="flex-start"
                >
                    <H4 marginBottom="sm">What: </H4>
                    <ReactMarkdown
                        renderers={{
                            paragraph: MarkdownP,
                        }}
                        source={work.description}
                    />
                </Flex>
                <Flex
                    wrap="wrap"
                    justify="space-between"
                    direction="row"
                    align="center"
                >
                    <H4 marginBottom="sm">How: </H4>
                    <Flex wrap="wrap" justify="flex-end">
                        {work.technologies.map((technology: string) => (
                            <P
                                textAlign="right"
                                marginLeft="sm"
                                marginBottom="sm"
                                color="medium"
                                key={technology + work.id}
                            >
                                {technology}
                            </P>
                        ))}
                    </Flex>
                </Flex>
            </Col>
        </Row>
    );
};

export default ProjectRow;
