import React, { useRef, useState } from 'react';
import anime from 'animejs';
import BackgroundImage from 'gatsby-background-image';
import { css } from 'styled-components/macro';
import { mobile } from 'mediaQueries';
import { uniqueId } from 'lodash';
import { randomColor } from '../../utils/random';
import usePointer from '../../components/usePointer';

const styles = {
    image: css`
        height: 420px;

        ${mobile(css`
            height: calc(calc(100vw - 30px) * 0.5625);
        `)};

        background-position: center;
        background-size: contain;

        background-color: ${({ theme }) => theme.color.white};
    `,
    imageContainer: css`
        background-color: ${({ theme }) => theme.color.light};

        padding: 15px;
        margin-bottom: 33px;
        position: relative;
    `,
    imageTransitionBlock: css`
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 100%;
        transition: background-color 500ms;
        background-color: ${({ theme, color }) => theme.color[color]};
        z-index: 1;
    `,
};

const ImageViewer = ({ images, colorsToAvoid }) => {
    const id = useRef(uniqueId('freelance_image')).current;
    const [currentImage, setCurrentImage] = useState(0);

    const animationId = `freelance-image-${id}`;
    const animationTarget = `[data-animation="${animationId}"]`;

    const [color, setColor] = useState(randomColor(colorsToAvoid));

    const transitionLock = useRef(false);

    const switchImage = async () => {
        if (transitionLock.current) return;
        transitionLock.current = true;

        await anime({
            targets: animationTarget,
            keyframes: [
                { right: '100%', left: '0%' },
                { right: '0%', left: '0%' },
            ],
            duration: 500,
            easing: 'easeInOutQuint',
        }).finished;
        currentImage === images.length - 1
            ? setCurrentImage(0)
            : setCurrentImage(currentImage + 1);
        setColor(color => randomColor([...colorsToAvoid, color]));
        await anime({
            targets: animationTarget,
            keyframes: [
                { right: '0%', left: '0%' },
                { right: '0%', left: '100%' },
            ],
            duration: 500,
            easing: 'easeInOutQuint',
        }).finished;
        anime.set(animationTarget, {
            right: '100%',
            left: '0%',
        });

        transitionLock.current = false;
    };

    const { pointerClasses } = usePointer([color]);

    return (
        <button css={styles.imageContainer} onClick={switchImage}>
            <div
                css={styles.imageTransitionBlock}
                color={color}
                data-animation={animationId}
            />
            <BackgroundImage
                fluid={images[currentImage].fluid}
                css={styles.image}
                colorsToAvoid={colorsToAvoid}
                className={pointerClasses}
            />
        </button>
    );
};

export default ImageViewer;
