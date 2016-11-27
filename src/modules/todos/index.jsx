import React, { PropTypes } from 'react';
import { Card } from 'antd';
import TodoList from './components/TodoList';

import { connect } from 'react-redux';


const Todos = ({data, dispatch, isLoading}) => {

  const fn1 = ()=>{
    dispatch({
      type:'todos/get',
      payload:{
        test:"get some todos"
      }
    })
  };

  return <TodoList todos={data} getTodoList={fn1} isLoading={isLoading}/>
};

function mapStateToProps(state){
  return {
    data: state.todos.todoList,
    isLoading: state.todos.loading
  }
}

export default connect(mapStateToProps)(Todos);
