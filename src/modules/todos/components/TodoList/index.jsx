import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Spin } from 'antd';
import TodoItem from '../TodoItem';

const TodoList = ({ todos, isLoading }) =>
  <div>
    {
      todos.size < 1 && !isLoading ? <h2>Click to load</h2> : null
    }
    {
      todos.map((v, k) => <TodoItem todo={v} key={k} />)
    }
    {
      isLoading ? <Spin /> : null
    }
  </div>;

TodoList.propTypes = {
  todos: ImmutablePropTypes.list.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default TodoList;
