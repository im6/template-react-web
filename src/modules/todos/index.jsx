import React, { PropTypes } from 'react';
import { Card } from 'antd';
import TodoList from './components/TodoList';


let data = [
  {key: 1,value: 'wash'},
  {key: 2,value: 'walk'},
  {key: 3,value: 'smear'},
  {key: 4,value: 'drink'},
];
const Todos = () => <TodoList todos={data} />

export default Todos;
