import React from 'react';
import PropTypes from 'prop-types';

function UserItem({ user }) {
  return (<h2>
    { `${user.get('key')}: ${user.get('value')}` }
  </h2>);
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

