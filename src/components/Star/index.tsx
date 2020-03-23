import styled from 'styled-components';

//NOTE: changing the NUMBER in the "tranform" will make the star "skewed"
interface Props {
  t: string;
  r: string;
}
export const Star = styled.div<Props>`
  position: absolute;
  top: ${({ t }) => t && `${t}vh`};
  right: ${({ r }) => r && `${r}vw`};

  width: 0;
  height: 0;
  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;

  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid #fc0;
  border-left: 0.3em solid transparent;

  /* Controlls the size of the stars. */
  font-size: 24px;

  &:before {
    content: '';

    display: block;
    width: 0;
    height: 0;

    position: absolute;
    top: 0.6em;
    left: -1em;

    border-right: 1em solid transparent;
    border-bottom: 0.7em solid #fc0;
    border-left: 1em solid transparent;

    transform: rotate(-35deg);
  }

  &:after {
    content: '';

    display: block;
    width: 0;
    height: 0;

    position: absolute;
    top: 0.6em;
    left: -1em;

    border-right: 1em solid transparent;
    border-bottom: 0.7em solid #fc0;
    border-left: 1em solid transparent;

    transform: rotate(35deg);
  }
`;
