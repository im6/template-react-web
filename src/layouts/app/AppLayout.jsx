import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './AppLayout.less';

const AppLayout = ({ children }) => {
  return (
    <div className={styles.normal}>
      <div className={styles.head}>
        <h1>RA</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.side}>
          <h2>Route:</h2>
          <Link to="/">Main123</Link><br />
          <Link to="/list">List</Link><br />
        </div>
        <div className={styles.main}>
          {children}
        </div>
      </div>
      <div className={styles.foot}>
        Built with react, react-router, redux, redux-thunk, ant-design, by ZJ Guo
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
