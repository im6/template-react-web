
import React, { PropTypes } from 'react';
import { DatePicker, Button } from 'antd';
import { connect } from 'react-redux';
import AppLayout from '../../layouts/app/AppLayout.jsx';
import TableEnterLeave from '../TableEnterLeave';
import { List, Map } from 'immutable';
import Test1 from '../Tutorial/Test1';

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

      ele = <Test1 list={[1,2,3,4]}/>;

    } else if(localUrl === '/table'){
      ele = <TableEnterLeave />;
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
  //url: PropTypes.string.isRequired,
};


function mapStateToProps({list}, { route }) {
  return {};
}

export default connect()(App);
