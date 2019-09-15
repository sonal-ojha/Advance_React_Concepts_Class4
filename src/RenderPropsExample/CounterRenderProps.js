import React, { Component } from 'react';

class CounterRenderProps extends Component {
    state = {
        count: 0,
    }

    handleClick = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1,
        });
    }
  render() {
    const { count} = this.state;
    return (
      <div className="App">
      {/* Using render as a prop and passing count and Handle Click as Function Arguments */}
        {this.props.render(count, this.handleClick)}
      </div>
    );
  }
}

export default CounterRenderProps;