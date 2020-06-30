import React, { useRef } from 'react';
import { colorList, shapeList } from '../utils/elements';

const UsePointer = colorsToAvoid => {
    const customColorList = colorList.filter(colorIndex =>
        colorsToAvoid ? !colorsToAvoid.includes(colorIndex) : true
    );
    const state = useRef({
        color:
            customColorList[Math.floor(Math.random() * customColorList.length)],
        shape: shapeList[Math.floor(Math.random() * shapeList.length)],
    }).current;

    return {
        shape: state.shape,
        color: state.color,
        pointerClasses: `pointer ${state.shape} ${state.color}`,
    };
};

export default UsePointer;
