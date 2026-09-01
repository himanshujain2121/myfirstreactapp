import React, { Component } from "react";

export default class StateInClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.inc = () => {
      this.setState({ count: this.state.count + 1 });
    };

    this.dec = () => {
      this.setState({ count: this.state.count - 1 });
    };
    this.reset = () => {
      this.setState({ count: 0 });
    };
  }
  render() {
    return (
      <div>
        <h2>State In Class</h2>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.inc}>increment</button>
        <button onClick={this.dec}>decrement</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
