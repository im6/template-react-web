import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import UserItem from './components/UserItem';

const Users = ({data}) => <Card>
  {
    data.map((v,k) => <UserItem key={k} user={v}/>)
  }
</Card>;

function mapStateToProps({user, routing}) {
  return {
    data: user.get('list'),
    isLoading: user.get('loading')
  };
}

export default connect(mapStateToProps)(Users);