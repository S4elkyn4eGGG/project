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
  className = '',
  style = {},
  onChange = (): any => {},
  onBlur = (): any => {},
  onInput = (): any => {},
  textarea = false,
}: IInputProps): JSX.Element => {
  return (
    <div>
      {textarea ? (
        <textarea
          className={`project_input ${className} project_input_textarea`}
          style={style}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onInput={onInput}
          placeholder={placeholder}
          autoComplete='off'
        />
      ) : (
        <input
          className={`project_input ${className}`}
          style={style}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onInput={onInput}
          placeholder={placeholder}
          autoComplete='off'
          type={type}
        />
      )}
      <ErrorLabel text={error} />
    </div>
  );
};

export default Input;
