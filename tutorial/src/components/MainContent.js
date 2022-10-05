import React, { Component } from 'react';
import './MainContent.css';
import TodoItem from './TodoItem';

const todoList = [
  { id: 1, text: '1111', completed: true },
  { id: 2, text: '2222', completed: true },
  { id: 3, text: '3333', completed: false },
  { id: 4, text: '4444', completed: true },
];

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
      todoList,
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    const todoItemsComponents = this.state.todoList.map((elem) => <TodoItem key={elem.id} text={elem.text} completed={elem.completed} />);

    return (
      <main className='main'>
        <div className='todo-list'>{todoItemsComponents}</div>
        <h1>Logged {this.state.isLoggedIn ? 'In' : 'Out'}</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Push Me!</button>
      </main>
    );
  }
}

export default MainContent;
