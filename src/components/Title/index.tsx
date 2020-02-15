import React from 'react';

import { ITitleProps } from 'models/ui.model';

import './title.scss';

const Title = ({ text, className = '' }: ITitleProps): JSX.Element => {
  return <div className={`project-title ${className}`}>{text}</div>;
};

export default Title;
