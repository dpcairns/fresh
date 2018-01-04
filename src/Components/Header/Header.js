import React from 'react';
import { NavLink } from 'redux-first-router-link';

import styles from './Header.css';

const Header = () => (
  <div className={styles.header}>
    <NavLink to='/' exact activeClassName={styles.active}>
      Home
    </NavLink>

    <NavLink
      activeClassName={styles.active}
      to={{ type: 'DETAIL', payload: { category: 'dinners' } }}
    >
      Dinners
    </NavLink>

    <NavLink
      activeClassName={styles.active}
      to={{ type: 'DETAIL', payload: { category: 'candy' } }}
    >
      Candy
    </NavLink>
  </div>
);

export default Header;
