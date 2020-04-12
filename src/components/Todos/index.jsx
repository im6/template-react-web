import React, { useState } from "react";
import PropTypes from "prop-types";

const Todos = ({ list, onAdd }) => {
  const [edit, setEdit] = useState("");
  return (
    <div>
      <ul>
        {list.map(({ id, name }) => (
          <li key={id.toString()}>{name}</li>
        ))}
      </ul>
      <form>
        <label>Add: &nbsp;</label>
        <input
          value={edit}
          onChange={({ target }) => {
            setEdit(target.value);
          }}
        />
        &nbsp;
        <button
          onClick={(event) => {
            event.preventDefault();
            setEdit("");
            onAdd(edit);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

Todos.propTypes = {
  list: PropTypes.array,
  onAdd: PropTypes.func,
};

export default Todos;
