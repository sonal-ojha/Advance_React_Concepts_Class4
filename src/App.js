import React, { Component } from 'react';
import './App.css';
import ContextAPI from './ContextAPI';
import ErrorBoundary from './ErrorBoundary';
import ButtonCounter from './ButtonClickCounter';
import TextCounter from './TextHoverCounter';

// Render Props Imports
import CounterRenderProps from './RenderPropsExample/CounterRenderProps';
import ButtonCounterRenderProps from './RenderPropsExample/ButtonClickRenderProps';
import TextHoverCounterRenderProps from './RenderPropsExample/TextHoverRenderProps';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
        Without ref:
        <input />
          Refs in React:
          <input ref={this.inputRef} />
        </div>
        <p> Advanced React concepts</p>
        <ErrorBoundary>
          <ContextAPI />
        </ErrorBoundary>
        {/* Using HOC - Higher Order Components */}
        <ButtonCounter />
        <TextCounter />
        <div>
          {/* Using Render Props Example */}
          <h2> ** Using Render Props Example ** </h2>
          <CounterRenderProps render={
              (count, handleClick) => <ButtonCounterRenderProps count={count} handleClick={handleClick} /> 
            }
          />
          <CounterRenderProps
            render={(count, handleClick) => <TextHoverCounterRenderProps count={count} handleClick={handleClick} />}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;













// import ButtonCounter from './ButtonClickCounter';



{/* <ButtonCounter /> */}