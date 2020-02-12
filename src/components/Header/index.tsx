import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Icon from 'components/Icon';

import './header.scss';

const Header = ({ authState }: any): JSX.Element => {
  return (
    <div className='header'>
      <Link to='/' className='header_logo'>
        <Icon name='wings' />
      </Link>
      <Link to='/' className='header_name'>
        RxJS State Management
      </Link>
      {authState.userResponse && (
        <div className='header_user'>
          {authState.user && <div>{authState.user.displayName} |</div>}
          <NavLink className='header_login' to='/login'>
            {authState.user ? 'Log out' : 'Log in'}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
