import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './AppLayout.less';
import 'font-awesome/less/font-awesome.less';
import img from '!file!./assets/gradient.jpg';

const AppLayout = ({ children }) =>
  <div className={styles.background} style={{background: `#f5f6f7 url(${img}) repeat-x 0 0`}}>
    <div>
      <h1>RA</h1>
    </div>
    <div>
      <div>
        <h2 className={styles.routeName}>Route:</h2>
        <Link to="/">
          Main
        </Link>
        <br />
        <Link to="/list">
          List
          <i className="fa fa-car"/>
        </Link>
        <br />
        <Link to="/table">
          Table
          <i className="fa fa-table"/>
        </Link><br />
      </div>
      <div>
        {children}
      </div>
    </div>
    <div>
      Built with react, react-router, redux, redux-thunk, ant-design, by ZJ Guo
    </div>
  </div>;

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
