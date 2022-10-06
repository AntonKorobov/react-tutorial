import React from 'react';

function TodoItem(props) {
  const style = {
    backgroundColor: props.item.completed ? 'green' : 'white',
  };

  return (
    <div style={style} className='todo-item'>
      <input type='checkbox' checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
