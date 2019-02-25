import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Card, Button } from 'antd';
import { createAction } from 'redux-actions';
import { connect } from 'react-redux';
import UserList from './components/UserList';

const Hello = ({ click, users }) => <Card>
  <Button onClick={click}>
    click
  </Button>
  <br />
  <br />
  <UserList userList={users} />
</Card>;

Hello.propTypes = {
  click: PropTypes.func.isRequired,
  users: ImmutablePropTypes.list.isRequired,
};


function mapStateToProps({ auth }) {
  return {
    users: auth.get('users'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    click: () => {
      const actcr = createAction('hello/get');
      dispatch(actcr());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
