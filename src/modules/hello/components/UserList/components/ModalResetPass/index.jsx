import React from 'react';
import { Modal } from 'antd';
import PasswordInput from '../PasswordInput';

class ModalResetPass extends React.Component {
  constructor(props) {
    super(props);
    const me = this;
    me.tempPass = null;
  }

  onPassChange(n) {
    const me = this;
    me.tempPass = n;
  }

  onOK() {
    const me = this;
    if (me.tempPass) {
      me.props.onOK(me.tempPass);
    }
  }

  render() {
    const me = this;
    const result = (
      <Modal
        width={440}
        title={<h3>Reset Password</h3>}
        visible={me.props.isVisible}
        cancelText="Cancel"
        okText="Update"
        onOk={me.onOK.bind(me)}
        onCancel={me.props.onCancel.bind(me)}
      >
        <label htmlFor>Username: </label>
        &nbsp;
        <b style={{ fontSize: '1.5em' }}>{me.props.user.get('username')}</b>
        <br />
        <br />
        <PasswordInput onChange={me.onPassChange.bind(me)} />
      </Modal>);
    return result;
  }
}


export default ModalResetPass;
