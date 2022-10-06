import React, { Component } from 'react';

export default class PushButton extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.counter > 10) {
      console.log('Limit of tapping achieved. STOP IT!');
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <p>{this.props.counter}</p>
        <button onClick={this.props.handleClick}>Push Me!</button>
      </div>
    );
  }
}
