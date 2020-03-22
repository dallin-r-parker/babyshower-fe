import { createGlobalStyle, keyframes } from 'styled-components';
import { CSSReset } from './CSSReset';

//TODO: probably readdress to not be on the HTML/Body container
// TODO: refactor for better performance css

//NOTE: the backround gradient might be better as a "nightsky" or silver base?
// background: radial-gradient(ellipse at bottom,  rgb(9,76,114) 0%,rgb(1,41,63) 100%);
// URL to codepen example https://tinyurl.com/sqxeqfh

const animate = keyframes`
0% {
  background-position: 0% 50%;
}

25% {
  background-position: 25% 75%
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
    height: 100vh;
    width: 100vw;
    color: black;
    background-image: linear-gradient(-45deg,#d4a17a,#e4a26f,#e8906e,#d27d67);
    background-size: 250% 250%;
    animation: ${animate} 15s ease-in-out infinite;
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
