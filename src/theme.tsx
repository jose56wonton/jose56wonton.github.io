export interface Theme {
  color: {
    fun1: string;
    fun2: string;
    fun3: string;
    fun4: string;
    fun5: string;
    light: string;
    medium: string;
    dark: string;
    [key: string]: any;
  };
  elementSizes: ElementSizes;
  typographySizes: TypographySizes;
}

export const theme: Theme = {
  color: {
    fun1: '#ffff4c',
    fun2: '#ACECA1',
    fun3: '#E59500',
    fun4:  '#FFF9A5',
    fun5: '#AFC2D5',
    light: '#EFEFEF',
    medium: '#CFCFCF',
    dark: '#333333',
  },
  elementSizes: {
    na: 0,
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
  },
  typographySizes: {
    h1: 100,
    h2: 80,
    h3: 35,
    h4: 20,
    p: 12,
    a: 12,
    li: 12,
  },
};

export interface ThemeProp {
  theme: Theme;
}

export const deviceSize = {
  mobile: `(max-width: 767px)`,
  tablet: `(min-width: 768px) and (max-width: 1024px)`,
  small: `(min-width: 1025px) and (max-width: 1920px)`,
  medium: `(min-width: 1921) and (max-width: 2560px)`,
  large: `(min-width: 2561px)`,
};

export type ElementSizesUnion = 'na' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ElementSizes = {
  [key in ElementSizesUnion]: number;
};

export type TypographySizesUnion = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'a' | 'li';
export type TypographySizes = {
  [key in TypographySizesUnion]: number;
};
