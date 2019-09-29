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
