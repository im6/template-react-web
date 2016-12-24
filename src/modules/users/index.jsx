import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import UserList from './components/UserList';

const Users = ({data}) => <UserList users={data} />

function mapStateToProps({user, routing}){
  return {
    data: user.get('list'),
    isLoading: user.get('loading')
  }
}

export default connect(mapStateToProps)(Users);