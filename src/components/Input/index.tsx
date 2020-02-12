import React from 'react';

import ErrorLabel from 'components/ErrorLabel';

import { IInputProps } from 'models/ui.model';

import './input.scss';

const Input = ({
  name = '',
  value = '',
  placeholder = '',
  error = '',
  type = 'text',
  onChange = () => {},
  onBlur = () => {},
  onInput = () => {},
}: IInputProps): JSX.Element => {
  return (
    <div>
      <input
        className='project_input'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onInput={onInput}
        placeholder={placeholder}
        autoComplete='off'
        type={type}
      />
      <ErrorLabel text={error} />
    </div>
  );
};

export default Input;
