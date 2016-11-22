
import React, { PropTypes } from 'react';
import { DatePicker, Button } from 'antd';
import { connect } from 'react-redux';
import Layout from '../layout/index.jsx'
import { List, Map } from 'immutable';

import Todos from '../todos';
import Users from '../users';

const App = ({ dispatch,  route}) => {
  let ele = null;
  const url = route.path;

  const onBtnClick = ()=>{
    dispatch({
      type:'list/get',
      payload:{
        test:"do it"
      }
    })
  };

  const fn = (localUrl) => {
    if (localUrl === '/') {
      ele = <DatePicker />;
    } else if (localUrl === '/list') {

      ele = <div>
        <Button type="primary" onClick = {onBtnClick}>Primary</Button>;
        <Test1 list={[1,2,3,4]}/>
      </div>;

    }  else if (localUrl == 'todos'){

      ele = <Todos />

    } else if(localUrl == 'users'){

      ele = <Users />

    }
    return ele;
  };

  return (
    <Layout>
      { fn(url) }
    </Layout>
  );
};

App.propTypes = {
  //url: PropTypes.string.isRequired,
};


function mapStateToProps({list}, { route }) {
  return {};
}

export default connect()(App);
