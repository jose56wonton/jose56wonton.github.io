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
  padding: ElementProportions;
}

export const theme: Theme = {
  color: {
    accent: '#ffff4c',
    light: '#dddddd',
    medium: '#A7A7A7',
    dark: '#333333',
  },
  innerBox: {
    // TODO: GET RID OF ALL THE USAGES OF THESE
    padding: 50,
  },
  outerBox: {
    padding: 200,
  },
  padding: {
    na: 0,
    xs: 25,
    sm: 50,
    md: 75,
    lg: 100,
    xl: 150,
  },
};

export interface ThemeProp {
  theme: Theme;
}

export const deviceSize = {
  mobile: `(min-width: 300px)`,
  tablet: `(min-width: 768px)`,
  small: `(min-width: 1024px)`,
  medium: `(min-width: 1441px)`,
  large: `(min-width: 1921px)`,
};

export type Proportions = 'na' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ElementProportions = {
  [key in Proportions]: number;
};
export const elementProportions: ElementProportions = {
  na: 0,
  xs: 25,
  sm: 50,
  md: 75,
  lg: 100,
  xl: 150,
};

export type MarginProportions = {
  [key in Proportions]: number;
};

export const marginProportions: MarginProportions = {
  na: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 48,
};

export type TypographyTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'a' | 'li';
export type TypographyProportions = {
  [key in TypographyTypes]: number;
};
export const typographyProportions: TypographyProportions = {
  h1: 100,
  h2: 80,
  h3: 35,
  h4: 20,
  p: 12,
  a: 12,
  li: 12,
};
