import React from 'react';

function TodoItem(props) {
  const style = {
    backgroundColor: props.completed ? 'green' : 'white',
  };

  return (
    <div style={style} className='todo-item'>
      <input type='checkbox' checked={props.completed} onChange={() => console.log('tap')} />
      <p>{props.text}</p>
    </div>
  );
}

export default TodoItem;
