import React, { Component } from 'react';
import { store } from '../store';
import { setCounterCount } from '../actions/index';

class Buttons extends Component {
  render() {
    return this.props.counts.map((count, i) => {
      return (
        <button onClick={() => store.dispatch(setCounterCount(count))}>
          Change To - {count}
        </button>
      );
    });
  }
}

export default Buttons;
