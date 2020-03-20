import { createGlobalStyle, keyframes } from "styled-components";
import { CSSReset } from "./CSSReset";

//TODO: probably readdress to not be on the HTML/Body container

const animate = keyframes`0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}`;

export const GlobalStyles = createGlobalStyle`
  ${CSSReset}

  html, body {
    color: black;
    background-image: linear-gradient(64deg,#eabc99 0%,#d27d67 74%);
    background-size: 400% 400%;
    animation: ${animate} 15s ease infinite;
  }

  h1 {
    font-size: 32px;
    line-height: 36px;
    font-family: inherit;
  }
  h2 {
    font-size: 24px;
    line-height: 32px;
    font-family: inherit;
  }
  h3 {
    font-size: 20px;
    line-height: 24px;
    font-family: inherit;
  }
  h4 {
    font-size: 16px;
    line-height: 20px;
    font-family: inherit;
  }
  h5 {
    font-size: 12px;
    line-height: 16px;
    font-family: inherit;
  }
`;
