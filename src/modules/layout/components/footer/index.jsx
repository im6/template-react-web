import React, { PropTypes } from 'react';
import { Card } from 'antd';
import style from './style.less';

const Footer = () =><footer className={style.footerContainer}>
  <div className={style.footerText}>
    Built with react, react-router, redux, redux-thunk, ant-design, by ZJ Guo
  </div>
</footer>

export default Footer;
