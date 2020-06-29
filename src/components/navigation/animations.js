import anime from 'animejs';
import { openButtonAnimationTarget } from './openButton';
import { bodyContentAnimationTarget } from './content';
import { closeButtonAnimationTarget } from './closeButton';

const easing = 'easeOutExpo';

export const openThatLad = async () => {
    await anime({
        easing,
        targets: openButtonAnimationTarget,
        scale: 30,
        rotate: 230,
        duration: 500,
    }).finished;
    anime({
        easing,
        targets: bodyContentAnimationTarget,
        opacity: 1,
        delay: anime.stagger(50),
        translateX: 0,
        duration: 250,
    });
    await anime({
        easing,
        targets: closeButtonAnimationTarget,
        scale: 1,
        rotate: 145,
        duration: 400,
    }).finished;
};
export const closeThatLad = async () => {
    anime({
        easing,
        targets: bodyContentAnimationTarget,
        opacity: 0,
        translateX: 50,
        delay: anime.stagger(50),
        duration: 250,
    });
    await anime({
        easing,
        targets: closeButtonAnimationTarget,
        scale: 0,
        rotate: 0,
        duration: 400,
    }).finished;
    await anime({
        easing,
        targets: openButtonAnimationTarget,
        scale: 1,
        rotate: -22,
        duration: 500,
    }).finished;
};
