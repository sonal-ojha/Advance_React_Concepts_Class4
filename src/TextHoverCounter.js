import React from 'react';
import CounterHOC from './CounterHOC';

class TextCounter extends React.Component {
    render() {
        const { handleClick, count } = this.props;
        return(
            <React.Fragment>
                <div onMouseOver={handleClick}>
                    Hover over Me !!
                </div>
                <div>
                    Hovered {count} times !
                </div>
            </React.Fragment>
        )
    } 
}

export default CounterHOC(TextCounter);