import React, { PropTypes } from 'react';
import { Row, Col, Menu, Icon, Button } from 'antd';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

import style from './style.less';
import img1 from '!file-loader!./assets/react.png';

const logout = () => {
  browserHistory.push('/logon');
};
const goHome = () => {
  browserHistory.push('/');
};

const Header = ({currentPath}) => {

  let result = <header className={style.header}>
    <div className={style.left}>
      <img src={img1} alt="logo"/>
      <h1>
        React Starter
      </h1>
    </div>
    <div className={style.right}>
      <Button type="default"
              icon="appstore"
              onClick={goHome}>
        Home
      </Button>
      <Button type="primary"
              icon="logout"
              onClick={logout}
        >
        Logout
      </Button>
    </div>

  </header>;

  return result;
};

export default Header;
