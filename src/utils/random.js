export const randomInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomBoolean = () => Math.random() >= 0.5;

export const colorArray = [
    'purple',
    'pink',
    'blue',
    'green',
    'orange',
    'yellow',
];
export const randomColor = colorsToAvoid => {
    const validColors = colorArray.filter(
        color => colorsToAvoid.indexOf(color) === -1
    );
    return validColors[Math.floor(Math.random() * validColors.length)];
};
