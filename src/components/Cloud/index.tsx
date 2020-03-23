import styled from 'styled-components';

interface Props {
  t: string;
  r: string;
}

export const Cloud = styled.div<Props>`
  margin-top: 100px;
  background: #fff;
  background: linear-gradient(top, #fff 5%, #f1f1f1 100%);
  border-radius: 100px;
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

  height: 12vh;
  width: 35vh;
  position: absolute;
  top: ${({ t }) => t && `${t}vh`};
  right: ${({ r }) => r && `${r}vw`};

  &:after,
  &:before {
    background: #fff;
    content: '';
    position: absolute;
    z-index: -1;
  }
  &:after {
    border-radius: 100px;

    height: 100px;
    left: 50px;
    top: -50px;
    width: 100px;
  }
  &:before {
    border-radius: 200px;

    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
  }
`;
