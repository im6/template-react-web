import React, { PropTypes } from 'react';
import { Button } from 'antd';

let g2 = 'g2';

class UserItem extends React.Component {
  g3 = 'g3';
  constructor(props) {
    super(props);
    let me = this;
    me.constValue = 'c1';
    me.state = {
      val: 's1'
    }
  }
  onClick(){
    let me = this;
    me.setState({
      val: me.state.val + '0'
    });
    me.constValue = me.constValue + '1';
    g2 = g2 + '2';
    me.g3 = me.g3 + '3';

  }

  render() {
    let me = this;
    return <h2>
      <Button onClick={me.onClick.bind(me)} >Click</Button>

      {me.constValue}
      <br/>
      {me.state.val}
      <br/>
      {g2}
      <br/>
      {me.g3}
      <br/>
      { me.props.user.get('key') + ': ' + me.props.user.get('value') }
      ==========
    </h2>;
  }
}


export default UserItem;

