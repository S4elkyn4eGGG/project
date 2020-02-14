import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Icon from 'components/Icon';

import './header.scss';

const Header = ({ authState }: any): JSX.Element => {
  const { pathname }: { pathname: string } = useLocation();

  const isLogin = pathname === '/login';

  return (
    <div className='header'>
      <Link to='/' className='header_logo'>
        <Icon name='wings' />
      </Link>
      <Link to='/' className='header_name'>
        RxJS State Management
      </Link>
      {!isLogin && authState.userResponse && (
        <div className='header_user'>
          <NavLink className='header_login' to='/admin'>
            {authState.user && <div>{authState.user.displayName} |</div>}
          </NavLink>
          <NavLink className='header_login' to='/login'>
            {authState.user ? 'Log out' : 'Log in'}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
