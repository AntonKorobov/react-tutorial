import React, { Component } from 'react';

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => {
        return { timer: prevState.timer + 1 };
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>Past :{this.state.timer} sec.</h2>
      </div>
    );
  }
}
