import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';
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
  return (<Card
    title="Todo List"
    extra={<a>More</a>}
  >
    <TodoList
      todos={list}
      isLoading={isLoading}
    />
    <br />
    <br />
    <br />
    <Button type="primary" onClick={fn1}>
      Load
    </Button>
  </Card>);
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
