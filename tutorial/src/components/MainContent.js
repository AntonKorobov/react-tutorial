import React from 'react';
import './MainContent.css';
import TodoItem from './TodoItem';

function MainContent() {
  return (
    <main className='main'>
      <div className='todo-list'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </main>
  );
}

export default MainContent;
