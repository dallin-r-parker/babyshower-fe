import React from 'react';
import styled from 'styled-components';

export const ErrorMessage: React.FC<{ error: any }> = ({ error }): JSX.Element => {
  const { length } = Object.keys(error);
  const errorMessage = `* One${!!length && length > 1 ? ` or more` : ` `} input fields has an error *`;

  return <>{<Text error={Object.keys(error).length >= 1}>{errorMessage}</Text>}</>;
};

const Text = styled.p<{ error: boolean }>`
  padding: 5px;
  font-weight: 700;
  font-style: italic;
  margin: 0 0 10px 0;
  letter-spacing: 0.3;
  transition: opacity 0.5s;
  opacity: ${({ error }) => (error ? 1 : 0)};
`;
