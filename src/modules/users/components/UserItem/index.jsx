import React, { PropTypes } from 'react';
import { Tag } from 'antd';



const UserItem = ({ user }) =>
  <h2>{ user.key + ': ' + user.value }</h2>;

export default UserItem;
