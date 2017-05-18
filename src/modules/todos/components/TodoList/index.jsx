import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Card, Button, Spin } from 'antd';
import TodoItem from '../TodoItem';

const TodoList = ({ todos, getTodoList, isLoading }) =>
  <Card
    title="Todo List"
    extra={<a>More</a>}
  >
    {
      todos.map((v, k) => <TodoItem todo={v} key={k} />)
    }
    {
      isLoading ? <Spin /> : null
    }

    <br />
    <br />
    <Button type="primary" onClick={getTodoList}>
      Load
    </Button>
  </Card>;

TodoList.propTypes = {
  todos: ImmutablePropTypes.list.isRequired,
  getTodoList: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default TodoList;
