import React, { Component } from 'react';
import CounterHOC from './CounterHOC';

class ButtonCounter extends Component {
  render() {
      const { handleClick , count} = this.props;
    return (
      <div className="App">
        <button onClick={handleClick} count={count}> Button Click Counter</button>
        Clicked {count} Times !!
      </div>
    );
  }
}

export default CounterHOC(ButtonCounter);