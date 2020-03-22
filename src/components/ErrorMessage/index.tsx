import React from 'react';
import styled from 'styled-components';

interface Props {
  error: any;
}

const findErrorMessage = (error: any): string | null => {
  const errorCount = Object.keys(error).length;
  console.log(`errorCount: `, errorCount);
  // console.log(`Object.keys(error): `, Object.keys(error));
  if (errorCount) {
    if (errorCount > 1) return `*All input fields are required*`;

    const key = Object.keys(error)[0];

    if (error[key].type === 'required') return `*Please fill in ${key} field*`;
  }
  return null;
};

// const hasErrors = (error: any): number => Object.keys(error).length;
// {
// const { length } = Object.keys(error).length;
// return { error: !!length, errorCount: length };
// };

export const ErrorMessage: React.FC<Props> = ({ error }): JSX.Element => {
  console.log(`error: `, error);

  // const errorCount = Object.keys(error).length;
  const errorMessage = findErrorMessage(error);
  console.log('errorMessage: ', errorMessage);

  // const errorMsg = errorCount > 1 ? `*All input fields are required*` ?

  return <>{<Text error={Object.keys(error).length >= 1}>{errorMessage}</Text>}</>;
};

const Text = styled.p<{ error: boolean }>`
  opacity: ${({ error }) => (error ? 1 : 0)};
  transition: opacity 0.5s;
  font-style: italic;
  padding: 5px;
  margin: 0 0 10px 0;
`;
