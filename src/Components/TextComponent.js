import React from 'react';

export default class TextComponent extends React.Component {
    render() {
        return (
        <p 
            style={this.props.inputsyle}
        >
            {this.props.children}
        </p>
        )
    };
}
