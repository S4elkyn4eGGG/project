import React from 'react';

import './panel.scss';

const Panel = ({ children, className = '' }: any) => {
  return <div className={`project-panel ${className}`}>{children}</div>;
};

export default Panel;
