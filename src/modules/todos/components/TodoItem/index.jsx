import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Tag } from 'antd';

function TodoItem({ todo }) {
  return (<Tag color="#87d068">
    { `${todo.get('key')}: ${todo.get('value')}` }
  </Tag>);
}

TodoItem.propTypes = {
  todo: ImmutablePropTypes.map.isRequired,
};

export default TodoItem;
