import React, { PropTypes } from 'react';
import { Card, Button, Spin } from 'antd';
import TodoItem from '../TodoItem';

const TodoList = ({ todos, getTodoList, isLoading }) =>
  <Card title="Todo List" extra={<a href="#">More</a>}>
  {
    todos.map((v, k) => {
    return <TodoItem todo={v} key={k}/>
    })
  }

  {isLoading? <Spin/> : null}

  <br />
  <br />
  <Button type="primary" onClick={getTodoList}>Load</Button>
</Card>;

export default TodoList;
