import React from 'react';
import styled from 'styled-components';

export const Input: React.FC = (): JSX.Element => {
  return (
    <>
      <label>LABEL placeholder</label>
      <Input />
      <h3>Error message placeholder</h3>
    </>
  );
};

export const _Input = styled.input`
  width: 90%;
  height: 50px;
  border: none;
  outline: none;
  font-size: 24px;
  padding-top: 5px;
  line-height: 20px;
  margin-bottom: 12px;
  font-family: inherit;
  letter-spacing: 0.25px;
`;
