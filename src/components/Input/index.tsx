import React from 'react';
import styled from 'styled-components';

interface Props {
  errors: any;
  name: string;
  label: string;
  register: any;
  autofocus?: boolean;
  validate?: any;
}

//NOTE: make interface for options pased to register func

export const Input: React.FC<Props> = (props): JSX.Element => {
  const defaultOptions = { required: true };
  const options = props.validate ? { ...defaultOptions, ...props.validate } : defaultOptions;

  return (
    <Wrapper error={props.errors[props.name]}>
      <label>Enter {props.label}:</label>
      <input name={props.name} ref={props.register(options)} autoFocus={props.autofocus} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ error: any }>`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  label {
    color: white;
    font-size: 25px;
    padding: 0 0 8px 0;
  }

  input {
    width: 100%;
    height: 50px;
    border: none;
    outline: ${({ error, theme }) => error && `3px solid ${theme.colors['errorRed'].hex}`};
    font-size: 26px;
    line-height: 20px;
    font-family: inherit;
    letter-spacing: 0.25px;
    padding-left: 5px;
    border-radius: 5px;

    &:focus {
      outline: 3px solid
        ${({ error, theme }) =>
          error ? `${theme.colors['errorRed'].hex}` : `${theme.colors['focusBlue'].hex}`};
    }
  }
`;
