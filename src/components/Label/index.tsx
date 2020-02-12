import React from 'react';

import { ILabelProps } from 'models/ui.model';

import './label.scss';

const Label = ({ text = '', onClick = () => {} }: ILabelProps): JSX.Element => {
  return (
    <div className='project_label' onClick={onClick}>
      {text}
    </div>
  );
};

export default Label;
