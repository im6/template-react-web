import React from 'react';
import { Card, Button, Input, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import ReactDipper from 'react-dipper';
import { browserHistory } from 'react-router';
import style from './style.less';

const loginClick = () => {
  browserHistory.push('/');
};

const LogOn = () => <div className={style.authContainer}>
  <div className={style.canvansContainer}>
    <ReactDipper />
  </div>

  <QueueAnim
    delay={[100, 0]}
    type={'bottom'}
    ease={'easeOutQuart'}
  >
    <div key="a">
      <Card
        title="Welcome to React"
        style={{ width: 270 }}
      >
        <Input addonBefore={<Icon type="user" />} placeholder="Username" />
        <br />
        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
        <br />
        <Button
          type="primary"
          onClick={loginClick}
          style={{ width: '100%' }}
        >
          Login
        </Button>
      </Card>
    </div>
  </QueueAnim>
</div>;

export default LogOn;
