export interface ThemeColor<S extends string, G extends string | null> {
  solid: S;
  gradient?: G;
}

export interface ThemeColors {
  white: ThemeColor<"#ffffff", null>;
  gold: ThemeColor<
    "#e0d2b4",
    "linear-gradient(315deg, #e0d2b4 0%, #e2ac6b 74%)"
  >;
  roseGold: ThemeColor<
    "#dfa375",
    "linear-gradient(315deg, #dfa375 0%, #c58e7f 74%)"
  >;
  steelBlue: ThemeColor<
    "#8693ab",
    "linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)"
  >;
  silver: ThemeColor<"#C5C6C5", null>;
  lightGray: ThemeColor<"#d3d3d3", null>;
}

export const colors: ThemeColors = {
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
    gradient: "linear-gradient(315deg, #dfa375 0%, #c58e7f 74%)"
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
