import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';

const Todos = ({ list, isLoading, dispatch }) => {
  const fn1 = () => {
    dispatch({
      type: 'todos/get',
      payload: {
        test: 'get some todos',
      },
    });
  };
  return (<TodoList
    todos={list}
    getTodoList={fn1}
    isLoading={isLoading}
  />);
};

Todos.propTypes = {
  list: ImmutablePropTypes.list.isRequired,
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps({ todo }) {
  return {
    list: todo.get('list'),
    isLoading: todo.get('loading'),
  };
}

export default connect(mapStateToProps)(Todos);
