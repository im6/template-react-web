import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'antd';
import UserItem from './components/UserItem';

const Users = ({data}) => <Card>
  {
    data.map((v,k) => <UserItem key={k} user={v}/>)
  }
</Card>;

function mapStateToProps({ user }) {
  return {
    data: user.get('list'),
    isLoading: user.get('loading'),
  };
}

Users.propTypes = {
  data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Users);