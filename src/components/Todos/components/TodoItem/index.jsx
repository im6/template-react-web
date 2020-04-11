import React from "react";

function TodoItem({ todo }) {
  return <div>{`${todo.get("key")}: ${todo.get("value")}`}</div>;
}

export default TodoItem;
