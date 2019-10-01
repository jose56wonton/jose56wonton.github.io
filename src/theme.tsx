export interface Theme {
  color: {
    accent: string;
    light: string;
    medium: string;
    dark: string;
    [key: string]: any;
  };
  innerBox: {
    padding: number;
  };
  outerBox: {
    padding: number;
  };
}

export const theme: Theme = {
  color: {
    accent: '#ffff4c',
    light: '#dddddd',
    medium: '#A7A7A7',
    dark: '#333333',
  },
  innerBox: {
    padding: 50,
  },
  outerBox: {
    padding: 200,
  },
};

export interface ThemeProp {
  theme: Theme;
}

export const deviceSize = {
  mobile: `(min-width: 425px)`,
  tablet: `(min-width: 768px)`,
  small: `(min-width: 1024px)`,
  medium: `(min-width: 1440px)`,
  large: `(min-width: 2000px)`,
};

interface ElementProportions {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const elementProportions: ElementProportions = {
  xs: 25,
  sm: 50,
  md: 75,
  lg: 100,
  xl: 150,
};

interface TypographyProportions {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  p: number;
  a: number;
}

export const typographyProportions: TypographyProportions = {
  h1: 100,
  h2: 80,
  h3: 35,
  h4: 40,
  p: 20,
  a: 20,
};
