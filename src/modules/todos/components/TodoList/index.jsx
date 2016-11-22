import React, { PropTypes } from 'react';
import { Card } from 'antd';
import TodoItem from '../TodoItem';



const TodoList = ({ todos }) => <Card title="Todo List" extra={<a href="#">More</a>} style={{ width: 300 }}>
  {todos.map((v, k) => {
    return <TodoItem todo={v} key={k}/>
  })}
</Card>;

export default TodoList;
