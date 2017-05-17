/* eslint import/no-unresolved: 0 */
import React from 'react';
import { Button } from 'antd';
import { browserHistory } from 'react-router';
import img1 from '!file-loader!./assets/react.png';
import style from './style.less';

const logout = () => {
  browserHistory.push('/logon');
};
const goHome = () => {
  browserHistory.push('/');
};

const Header = () => {
  const result = (<header className={style.header}>
    <div className={style.left}>
      <img
        src={img1}
        alt="logo"
      />
      <h1>
        React Starter
      </h1>
    </div>
    <div className={style.right}>
      <Button
        type="default"
        icon="appstore"
        onClick={goHome}
      >
        Home
      </Button>
      <Button
        type="primary"
        icon="logout"
        onClick={logout}
      >
        Logout
      </Button>
    </div>
  </header>);

  return result;
};

export default Header;
