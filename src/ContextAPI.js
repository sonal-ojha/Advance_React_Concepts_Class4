import React, { Component } from 'react';
import Person from './Details/Person';

export const MyDataContext = React.createContext();

class ContextAPI extends Component {
    state= {
        name: 'jsFactory',
        address: 'marathalli',
        started: '2018',
    }
    render() {
        return (
        <div className="m-10">
            Context API : <br />
            Used to pass data directly to the required componnet at any level depth using Consumer and Provider concepts
            <MyDataContext.Provider value={{
                state: this.state,
                updateName: () => {
                    this.setState({
                        name: 'JSFACTORY 2019'
                    })
                }
            }}>
                <Person />
            </MyDataContext.Provider>
        </div>
        );
    }
}

export default ContextAPI;
