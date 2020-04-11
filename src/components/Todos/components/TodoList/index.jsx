import React from "react";

import TodoItem from "../TodoItem";

const TodoList = ({ todos, isLoading }) => (
  <div>
    {todos.size < 1 && !isLoading ? <h2>Click to load</h2> : null}
    {todos.map((v, k) => (
      <TodoItem todo={v} key={k} />
    ))}
  </div>
);

export default TodoList;
