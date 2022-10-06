import React, { Component } from 'react';
import './MainContent.css';
import TodoItem from './TodoItem';
import PushButton from './PushButton';
import Timer from './Timer';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  handleChange(id) {
    this.setState((prevState) => {
      const modifiedTodoList = prevState.todoList.map((elem) => {
        if (elem.id === id) {
          elem.completed = !elem.completed;
        }
        return elem;
      });
      return {
        todoList: modifiedTodoList,
      };
    });
  }

  render() {
    const todoItemsComponents = this.state.todoList.map((item) => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />);

    return (
      <main className='main'>
        <div className='todo-list'>{todoItemsComponents}</div>
        <h1>Logged {this.state.isLoggedIn ? 'In' : 'Out'}</h1>
        <PushButton counter={this.state.counter} handleClick={this.handleClick} />
        <Timer />
      </main>
    );
  }
}

export default MainContent;
