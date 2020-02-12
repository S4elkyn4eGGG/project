import React from 'react';

import { IButtonProps } from 'models/ui.model';

import './button.scss';

const Button = ({
  text = '',
  onClick = () => {},
  disabled = false,
  submit = false,
}: IButtonProps): JSX.Element => {
  return (
    <div
      className={`project_button ${disabled ? 'project_button__disabled' : ''}`}
      onClick={onClick}
    >
      {text}
      {submit && <button style={{ display: 'none' }} />}
    </div>
  );
};

export default Button;
