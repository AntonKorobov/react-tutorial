import React, { Component } from 'react';

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    fetch('http://worldtimeapi.org/api/ip')
      .then((response) => response.json())
      .then((data) => {
        const currentDate = new Date(data.datetime);
        this.setState({ timer: currentDate.getHours() * 60 * 60 + currentDate.getMinutes() * 60 + currentDate.getSeconds() });

        setInterval(() => {
          this.setState((prevState) => {
            return { timer: prevState.timer + 1 };
          });
        }, 1000);
      });
  }

  render() {
    return (
      <div>
        Current time: {Math.floor(this.state.timer / (60 * 60))} : {Math.floor((this.state.timer / 60) % 60)} : {Math.floor(this.state.timer % 60)}
      </div>
    );
  }
}
