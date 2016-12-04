import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './style.less';
import 'font-awesome/less/font-awesome.less';
import img from '!file!./assets/gradient.jpg';
import { Row, Col, Button } from 'antd';

import Footer from './components/footer/index.jsx';
import Header from './components/header/index.jsx';
import Background from './components/background/index.jsx';


const Layout = ({children}) =>{

  var result = <div style={{background: `#f5f6f7 url(${img}) repeat-x 0 0`}}>
    <Header className={styles.header}/>
    <div className={styles.canvas}>
      <Background />
    </div>

    <div className={styles.main}>
      <Row>
        <Col span={6}></Col>

        <Col span={6}>
          <div>
            <h2 className={styles.routeName}>Route:</h2>
            <Link to="/">
              <h4>Home</h4>
            </Link>
            <br />
            <Link to="/#/todos">
              <h4>Todos</h4>
            </Link>
            <br />
            <Link to="/#/users">
              <h4>Users</h4>
            </Link>
            <br />
          </div>
        </Col>
        <Col span={6}>
          <div>
            {children}
          </div>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>


    <Footer className={styles.footer}/>
  </div>;

  return result;
};


Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
