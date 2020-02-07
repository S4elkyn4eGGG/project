import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Icon from 'components/Icon';

import './header.scss';

const Header = (): JSX.Element => {
  return (
    <div className='header'>
      <Link to='/' className='header_logo'>
        <Icon name='rxjs' />
      </Link>
      <Link to='/' className='header_name'>
        RxJS State Management
      </Link>
      <NavLink to='/edit' className='header_edit'>
        Edit
      </NavLink>
    </div>
  );
};

export default Header;
