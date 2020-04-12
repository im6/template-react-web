import React from "react";
import PropTypes from "prop-types";

const Todos = ({ list }) => {
  console.log(list);
  return (
    <ul>
      {list.map(({ id, name }) => {
        return <li key={id.toString()}>{name}</li>;
      })}
    </ul>
  );
};

Todos.propTypes = {
  list: PropTypes.array,
};

export default Todos;
