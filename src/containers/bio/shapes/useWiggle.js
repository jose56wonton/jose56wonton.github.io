import React, { useEffect, useRef } from 'react';
import { uniqueId } from 'lodash';
import anime from 'animejs';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const useWiggle = (prefix, { rotation }) => {
    const id = useRef(uniqueId(`wiggle-${prefix}`)).current;
    const animationDuration = useRef(random(2500, 4000)).current;
    const animationTarget = `[data-animation="${id}"]`;
    useEffect(() => {
        anime.set(animationTarget, {
            rotate: rotation,
        });
        anime({
            targets: animationTarget,
            rotate: [
                { value: rotation + 2 },
                { value: rotation },
                { value: rotation - 2 },
                { value: rotation },
            ],
            scale: [
                { value: 1.01 },
                { value: 1.02 },
                { value: 0.99 },
                { value: 1 },
            ],
            duration: animationDuration,
            easing: 'linear',
            loop: true,
        });
    }, []);

    return id;
};

export default useWiggle;
