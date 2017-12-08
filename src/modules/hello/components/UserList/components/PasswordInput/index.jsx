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
      const isValid = me.validate();
      if (isValid) {
        me.props.onChange(me.state.pass0);
      } else {
        me.props.onChange(null);
      }
      me.setState({
        error: !isValid,
      });
    }
  }

  validate() {
    const me = this;
    return (me.state.pass0 === me.state.pass1) && passReg.test(me.state.pass0);
  }

  render() {
    const me = this;
    const result = (<div>
      <label htmlFor="test">
        &nbsp;
        &nbsp;
        &nbsp;
        New Password:
      </label>&nbsp;&nbsp;
      <Input
        type="password"
        className={style.input}
        value={me.state.pass0}
        onChange={me.onChange.bind(me, 'pass0')}
      />
      <br />
      <br />

      <label htmlFor="test">
        Re-enter Password:
      </label>&nbsp;&nbsp;
      <Input
        type="password"
        className={style.input}
        value={me.state.pass1}
        onBlur={me.onBlur.bind(me, 'pass1')}
        onChange={me.onChange.bind(me, 'pass1')}
      />
      {
        me.state.error ? <Tag style={{ marginLeft: 10 }} color="red">
          Inconsistent Password!
        </Tag> : null
      }

    </div>);
    return result;
  }
}


export default PasswordInput;
