import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return <h1>Count - {this.props.count}</h1>;
  }
}

export default Counter;
