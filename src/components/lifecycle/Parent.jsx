import React, { Component } from 'react';
import Student from './Student';

export default class Parent extends Component {
  state = { showStudent: true };

  toggleStudent = () => {
    this.setState({ showStudent: !this.state.showStudent });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleStudent}>
          {this.state.showStudent ? 'Unmount Student' : 'Mount Student'}
        </button>
        {this.state.showStudent && <Student />}
      </div>
    );
  }
}