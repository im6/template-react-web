import React, { PropTypes } from 'react';
import { Card } from 'antd';
import UserList from './components/UserList';


let data = [
  {key: 1,value: 'Tim'},
  {key: 2,value: 'Sam'},
  {key: 3,value: 'Mitt'},
  {key: 4,value: 'ODom'},
];
const Users = () => <UserList users={data} />

export default Users;
