import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ name }) => (
  <div>
    <h3>
      Hello, &nbsp;
      {name}
    </h3>
  </div>
);
Hello.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Hello;
