export interface Color {
  solid: string;
  gradient?: string;
}

export interface Colors {
  white: Color;
  gold: Color;
  roseGold: Color;
  steelBlue: Color;
  silver: Color;
  lightGray: Color;
}

export type themeColors = keyof typeof colors;

export const colors = {
  white: {
    solid: "#ffffff",
    gradient: null
  },
  gold: {
    solid: "#e0d2b4",
    gradient: "linear-gradient(315deg, #e0d2b4 0%, #e2ac6b 74%)"
  },
  roseGold: {
    solid: "#dfa375",
    gradient: "linear-gradient(45deg, #dfa375 0%, #c58e7f 74%)"
  },
  steelBlue: {
    solid: "#8693ab",
    gradient: "linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)"
  },
  silver: {
    solid: "#C5C6C5",
    gradient: null
  },
  lightGray: {
    solid: "#d3d3d3",
    gradient: null
  }
};
