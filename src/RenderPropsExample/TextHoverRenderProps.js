import React, { Component } from 'react';

class TextHoverCounterRenderProps extends Component {
  render() {
      const { handleClick , count} = this.props;
    return (
      <div className="App">
         <div onMouseOver={handleClick}>
            Hover over Me !!
        </div>
        <div>
            Hovered {count} times !
        </div>
      </div>
    );
  }
}

export default TextHoverCounterRenderProps;