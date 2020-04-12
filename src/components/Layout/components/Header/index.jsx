/* eslint import/no-unresolved: 0 */
import React from 'react';
import style from './style.less';

const Header = () => {
  const result = (
    <header className={style.header}>
      <h1>&nbsp;&nbsp; React Starter</h1>
    </header>
  );

  return result;
};

export default Header;
