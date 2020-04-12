import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Todos = ({ list, onAdd }) => {
  const [edit, setEdit] = useState('');
  return (
    <div>
      <ul>
        {list.map(({ id, name }) => (
          <li key={id.toString()}>{name}</li>
        ))}
      </ul>
      <div>
        <label>
          Add: &nbsp;
          <input
            type="text"
            value={edit}
            onChange={({ target }) => {
              setEdit(target.value);
            }}
          />
        </label>
        &nbsp;
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setEdit('');
            onAdd(edit);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

Todos.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Todos;
