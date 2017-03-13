import React, { PropTypes } from 'react';
import { Button } from 'antd';

let g = 'g2';

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    let me = this;
    me.isAnimating = true;
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
    g = g + '2';

  }

  render() {
    let me = this;
    return <h2>
      <Button onClick={me.onClick.bind(me)} >Click</Button>

      {me.constValue}
      <br/>
      {me.state.val}
      <br/>
      {g}
      <br/>
      { me.props.user.get('key') + ': ' + me.props.user.get('value') }
      ==========
    </h2>;
  }
}


export default UserItem;

