import React from 'react';

export default class ButtonComponent extends React.Component {
    render() {
        return (
        <button
            style={this.props.inputsyle}
        >
            {this.props.data}
        </button>
        )
    };
}
