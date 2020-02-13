import React from 'react';

import { IButtonProps } from 'models/ui.model';

import './button.scss';

const Button = ({
  text = '',
  onClick = (): any => {},
  disabled = false,
  submit = false,
  className = '',
}: IButtonProps): JSX.Element => {
  return (
    <div
      className={`project_button ${
        disabled ? 'project_button__disabled' : ''
      } ${className}`}
      onClick={onClick}
    >
      {text}
      {submit && <button style={{ display: 'none' }} />}
    </div>
  );
};

export default Button;
