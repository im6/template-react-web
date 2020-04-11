import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

const Todos = ({ list, isLoading, dispatch }) => {
  const fn1 = () => {
    dispatch({
      type: "todos/get",
      payload: {
        test: "get some todos",
      },
    });
  };
  return (
    <div>
      <TodoList todos={list} isLoading={isLoading} />
      <br />
      <br />
      <br />
      <button onClick={fn1}>Load</button>
    </div>
  );
};

Todos.propTypes = {
  list: PropTypes.any,
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Todos;
