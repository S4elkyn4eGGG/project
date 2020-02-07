import React from 'react';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

import './header.scss';

const Header = (): JSX.Element => {
  return (
    <div className='header'>
      <Link to='/' className='header_logo'>
        <Icon name='eagle' />
      </Link>
      <Link to='/' className='header_name'>
        Site Name
      </Link>
    </div>
  );
};

export default Header;
