
import React, { PropTypes } from 'react';
import { DatePicker, Button } from 'antd';
import { connect } from 'react-redux';
import AppLayout from '../../layouts/app/AppLayout.jsx';

const App = ({ url }) => {
  let ele = null;
  const fn = (localUrl) => {
    if (localUrl === '/') {
      ele = <DatePicker />;
    } else if (localUrl === '/list') {
      ele = <Button type="primary">Primary</Button>;
    }

    return ele;
  };

  return (
    <AppLayout>
      { fn(url) }
    </AppLayout>
  );
};

App.propTypes = {
  url: PropTypes.string.isRequired,
};

function mapStateToProps({ list }, { route }) {
  return {
    url: route.path,
  };
}

export default connect(mapStateToProps)(App);
