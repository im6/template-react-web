import React, { PropTypes } from 'react';
import { Button } from 'antd';

class UserItem extends React.Component {

  constructor(props) {
    super(props);
    let me = this;
  }

  render() {
    let me = this;
    return <h2>
      { me.props.user.get('key') + ': ' + me.props.user.get('value') }
    </h2>;
  }
}


export default UserItem;

