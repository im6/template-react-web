import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './AppLayout.css';
import 'font-awesome/less/font-awesome.less';

const AppLayout = ({ children }) =>
  <div className={styles.background}>
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
