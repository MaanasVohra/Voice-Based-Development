import React from 'react';

export default class DivComponent extends React.Component {
    render() {
        return (
        <div 
            style={this.props.inputstyle}
        >
            {this.props.children}
        </div>
        )
    };
}
