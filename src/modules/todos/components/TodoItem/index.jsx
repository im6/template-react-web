import React, { PropTypes } from 'react';
import { Tag } from 'antd';



const TodoItem = ({ todo }) =>
  <Tag color="#87d068">{ todo.key + ': ' + todo.value }</Tag>;

export default TodoItem;
