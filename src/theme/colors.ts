export interface Color {
  hex: string;
  gradient?: string | null;
  rgb?: string;
}

export interface Colors {
  white: Color;
  gold: Color;
  roseGold: Color;
  steelBlue: Color;
  silver: Color;
  lightGray: Color;
  darkGray: Colors;
  errorRed: Colors;
  focusBlue: Colors;
}

export type themeColors = keyof typeof colors;

export const colors = {
  white: { hex: '#ffffff', gradient: null },
  silver: { hex: '#C5C6C5', gradient: null },
  lightGray: { hex: '#d3d3d3', gradient: null },
  darkGray: { hex: '#9a9c9a', gradient: null },
  errorRed: { hex: '#ff6961', gradient: null },
  focusBlue: { hex: '#4d84e2', gradient: null },
  gold: {
    hex: '#e0d2b4',
    gradient: 'linear-gradient(315deg, #e0d2b4 0%, #e2ac6b 74%)'
  },
  roseGold: {
    hex: '#dfa375',
    gradient: 'linear-gradient(45deg, #dfa375 0%, #c58e7f 74%)'
  },
  steelBlue: {
    hex: '#8693ab',
    gradient: 'linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)',
    rgb: '134,147,171'
  }
};
