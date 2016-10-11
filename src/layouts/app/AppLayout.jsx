import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './AppLayout.less';
import styles2 from './AppLayout.css';

const AppLayout = ({ children }) =>
  <div className={styles2.background}>
    <div>
      <h1>RA</h1>
    </div>
    <div>
      <div>
        <h2 className={styles2.routeName}>Route:</h2>
        <Link to="/">Main</Link><br />
        <Link to="/list">List</Link><br />
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
