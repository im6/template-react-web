import React from 'react';
import { Table, Button } from 'antd';

import ModalResetPass from './components/ModalResetPass';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    const me = this;
    me.state = {
      showPassReset: false,
      selectedUser: null,
    };
  }

  onResetPass(selectedUser) {
    const me = this;
    me.setState({
      showPassReset: true,
      selectedUser,
    });
  }

  onResetPassOK() {
    const me = this;
    me.setState({
      showPassReset: false,
      selectedUser: null,
    });
  }
  onResetPassCancel() {
    const me = this;
    me.setState({
      showPassReset: false,
      selectedUser: null,
    });
  }

  render() {
    const me = this;
    const immList = [];
    me.props.userList.forEach((v) => {
      immList.push(v);
    });

    const tableColumns = [
      {
        title: 'Username',
        render: r => r.get('username'),
      },
      {
        title: 'Options',
        render: r => (
          <div>
            <Button
              type="default"
              onClick={me.onResetPass.bind(me, r)}
            >
              Reset Password
            </Button>
          </div>
        ),
      },
    ];

    return (
      <div style={{ width: '30%' }}>
        <Table
          loading={me.props.loading}
          columns={tableColumns}
          bordered
          rowKey={v => v.get('username')}
          pagination={false}
          size="small"
          dataSource={immList}
        />

        {
          me.state.selectedUser ?
            <ModalResetPass
              user={me.state.selectedUser}
              isVisible={me.state.showPassReset}
              onOK={me.onResetPassOK.bind(me)}
              onCancel={me.onResetPassCancel.bind(me)}
            /> : null
        }

      </div>
    );
  }
}

export default UserList;
