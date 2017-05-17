import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Row, Col, Button } from 'antd';

import style from './style.less';
//import '!style-loader!css-loader!font-awesome/css/font-awesome.min.css';
import img from '!file-loader!./assets/gradient.jpg';

import Footer from './components/footer/index.jsx';
import Header from './components/header/index.jsx';

const Layout = ({children}) =>{

  var result = <div className={style.layout}
                    style={{background: `#f5f6f7 url(${img}) repeat-x 0 0`}}>
    <Header />
    <div className={style.menuContainer}>
      Link: &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/">
        <span>
          Home
        </span>
      </Link>
      &nbsp;&nbsp;
      <Link to="/todos">
        <span>
          Todos</span>
      </Link>
      &nbsp;&nbsp;
      <Link to="/users">
        <span>
          Users</span>
      </Link>
    </div>

    <div className={style.main}>
      {children}
    </div>

    <Footer className={style.footer}/>
  </div>;

  return result;
};


Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
