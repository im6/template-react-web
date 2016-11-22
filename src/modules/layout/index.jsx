import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './style.less';
import 'font-awesome/less/font-awesome.less';
import img from '!file!./assets/gradient.jpg';
import { Row, Col } from 'antd';

import Footer from './components/footer/index.jsx';
import Header from './components/header/index.jsx';

const Layout = ({ children }) =>
  <div className={styles.background} style={{background: `#f5f6f7 url(${img}) repeat-x 0 0`}}>
    <Header />
    <Row>
      <Col span={6}></Col>

      <Col span={6}>
        <div>
          <h2 className={styles.routeName}>Route:</h2>
          <Link to="todos">
            <h4>Todos</h4>
          </Link>
          <br />
          <Link to="users">
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

    <Footer />
  </div>;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
