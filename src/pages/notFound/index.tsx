import React from 'react';

import './notFound.scss';
import Icon from '../../components/Icon';

const NotFound = (): JSX.Element => {
  return (
    <div className='page-not-found'>
      <Icon name='not-found' />
      <div className='page-not-found_title'>Page Not Found</div>
    </div>
  );
};

export default NotFound;
