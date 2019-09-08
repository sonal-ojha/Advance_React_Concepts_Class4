import React, { Component } from 'react';
import Address from './Address';

class Person extends Component {
  render() {
    return (
      <div className="m-10">
        I am a Person Component
        <Address />
      </div>
    );
  }
}

export default Person;
