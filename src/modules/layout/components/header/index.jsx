import React, { PropTypes } from 'react';
import { Card } from 'antd';
import style from './style.less';
import logo from '!file-loader!./assets/logo.png';

const Header = () =><header className={style.header}>
  <div>
    <img src={logo} className={style.logo}/>
    <h1>React Starter kit</h1>
  </div>
</header>;

export default Header;
