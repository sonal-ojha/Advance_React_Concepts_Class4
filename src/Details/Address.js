import React, { Component } from 'react';
import { MyDataContext } from '../ContextAPI';

class Address extends Component {
  static contextType = MyDataContext;
  render() {
    return (
      <div className="m-10">
        Address Details are :--
        <MyDataContext.Consumer>
          {(context) => (
            <div>
              {context.state.name}
              <div>
                Address: {context.state.address}
              </div>
              <div>
                Started in: {context.state.started}
              </div>
              <br />
              <button onClick={context.updateName}>
                Click to change Name
              </button>
            </div>
          )}
        </MyDataContext.Consumer>
      </div>
    );
  }
}

export default Address;
