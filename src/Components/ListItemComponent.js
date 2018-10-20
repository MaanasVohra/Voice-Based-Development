import React from 'react';

export default class ListItemComponent extends React.Component {
    render() {
        return (
        <li
            style={this.props.inputsyle}
        >
            {this.props.children}
        </li>
        )
    };
}
