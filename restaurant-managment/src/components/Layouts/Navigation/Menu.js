import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <aside className='sideMenu'>
      <ul className='menu'>
        <li className='menu__item'>
          <NavLink to='/tables' className='menuLink' activeClassName='currentPage'>
            Tables
          </NavLink>
        </li>
        <li className='menu__item'>
          <NavLink to='/waiters' className='menuLink' activeClassName='currentPage'>
            Waiters
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
