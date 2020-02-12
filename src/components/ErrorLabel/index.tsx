import React from 'react';

import { IErrorLabelProps } from 'models/ui.model';

import './errorLabel.scss';

const ErrorLabel = ({ text = '' }: IErrorLabelProps): JSX.Element => {
  return text ? <div className='project_error'>{text}</div> : <></>;
};

export default ErrorLabel;
