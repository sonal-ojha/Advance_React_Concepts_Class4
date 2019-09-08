import React, { Component } from 'react';
import './App.css';
import ContextAPI from './ContextAPI';
import ErrorBoundary from './ErrorBoundary';
import ButtonCounter from './ButtonClickCounter';
import TextCounter from './TextHoverCounter';

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
        <ButtonCounter />
        <TextCounter />
      </React.Fragment>
    );
  }
}

export default App;













// import ButtonCounter from './ButtonClickCounter';



{/* <ButtonCounter /> */}