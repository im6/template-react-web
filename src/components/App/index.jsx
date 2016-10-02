import React, { Component, PropTypes } from 'react';
import { DatePicker, Button } from 'antd';
import { connect } from 'react-redux';
import AppLayout from '../../layouts/app/AppLayout.jsx';

const App = ({url}) => {
  const fn = (url)=>{
    if(url === '/'){
      return <DatePicker/>
    } else if(url === '/list'){
      return <Button type="primary">Primary</Button>

    }
  };
  return (
    <AppLayout>
      {fn(url)}
    </AppLayout>
  );
};

function mapStateToProps({list},{route}) {
  return {
    url: route.path
  };
}

export default connect(mapStateToProps)(App);
