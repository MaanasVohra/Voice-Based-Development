import React from 'react';
import ListItemComponent from './ListItemComponent';

export default class ListComponent extends React.Component {
    render() {
        const t = this.props.children;
        return (
        <ul
            style={this.props.inputsyle}
        >
            <ListItemComponent>{t}</ListItemComponent>
        </ul>
        )
    };
}
