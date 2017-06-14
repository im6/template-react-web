import React from 'react';
import { Input, Tag } from 'antd';
import style from './style.less';

const passReg = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$/;

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    const me = this;
    me.state = {
      pass0: null,
      pass1: null,
      error: false,
    };
  }

  onChange(a, b) {
    const me = this;
    const changeObj = {};
    changeObj[a] = b.target.value;
    me.setState(changeObj);
  }

  onBlur(a) {
    const me = this;
    if (a === 'pass1') {
      me.validate();
    }
  }

  validate() {
    const me = this;
    const good = (me.state.pass0 === me.state.pass1) && passReg.test(me.state.pass0);
    if (good) {
      me.setState({
        error: false,
      });
      me.props.onChange(me.state.pass0);
    } else {
      me.setState({
        error: true,
      });
      me.props.onChange(null);
    }
  }

  render() {
    const me = this;
    const result = (<div>
      <label htmlFor>New Password: </label>&nbsp;
      <Input
        type="password"
        className={style.input}
        value={me.state.pass0}
        onChange={me.onChange.bind(me, 'pass0')}
      />
      &nbsp;&nbsp;
      &nbsp;&nbsp;
      &nbsp;&nbsp;

      <label htmlFor>Re-enter Password: </label>&nbsp;
      <Input
        type="password"
        className={style.input}
        value={me.state.pass1}
        onBlur={me.onBlur.bind(me, 'pass1')}
        onChange={me.onChange.bind(me, 'pass1')}
      />
      <br />
      <br />
      {
        me.state.error ? <Tag color="red">
          Invalid Password!
        </Tag> : null
      }

    </div>);
    return result;
  }
}


export default PasswordInput;
