
import React, { PropTypes } from 'react';
import { DatePicker, Button } from 'antd';
import { connect } from 'react-redux';
import Layout from '../layout/index.jsx';

const App = (a) => {
  return (
    <Layout>
      { a.children }
    </Layout>
  );
};

App.propTypes = {
  //url: PropTypes.string.isRequired,
};


export default connect()(App);
