import "styled-components";
import { ThemeColors } from "./colors";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeColors;
  }
}
