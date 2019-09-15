import React, { Component } from 'react';

class ButtonCounterRenderProps extends Component {
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

export default ButtonCounterRenderProps;