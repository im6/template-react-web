import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

function TodoItem({ todo }) {
  return (<Tag color="#87d068">
    { `${todo.get('key')}: ${todo.get('value')}` }
  </Tag>);
}

TodoItem.propTypes = {
  todo: PropTypes.array.isRequired,
};

export default TodoItem;
