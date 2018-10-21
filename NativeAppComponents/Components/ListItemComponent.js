import React from 'react';
import { ListItem } from 'native-base'; 

export default class ListItemComponent extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem style={this.props.inputstyle}>
                {this.props.children}
            </ListItem>
        );
    }
}
