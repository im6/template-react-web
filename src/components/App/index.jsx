
import React, { PropTypes } from 'react';
import { DatePicker, Button } from 'antd';
import { connect } from 'react-redux';
import AppLayout from '../../layouts/app/AppLayout.jsx';
import TableEnterLeave from '../TableEnterLeave';
import { List, Map } from 'immutable';

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

      const dummyTodos = List([
        Map({ id: 0, isDone: true,  text: 'make components' }),
        Map({ id: 1, isDone: false, text: 'design actions' }),
        Map({ id: 2, isDone: false, text: 'implement reducer' }),
        Map({ id: 3, isDone: false, text: 'connect components' })
      ]);
      ele = <div>
        <ul>
          {dummyTodos.map(t=> (
            <li>{t.toJS().text}</li>
          ))}
        </ul>
      </div>

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
