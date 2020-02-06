import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div>Header</div>
      <div>
        <ul>
          <li>
            <NavLink to={'/'} exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/edit'}>Edit</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
