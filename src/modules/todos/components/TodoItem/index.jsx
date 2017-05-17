import React from 'react';
import { Tag } from 'antd';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    let me = this;
  }

  render() {
    let me = this;
    let todo = me.props.todo;
    return <Tag color="#87d068">
      { todo.get('key') + ': ' + todo.get('value') }
    </Tag>;
  }
}

export default TodoItem;